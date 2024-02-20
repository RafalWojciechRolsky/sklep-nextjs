import { type Metadata } from "next";
import { ProductsGetListDocument, ProductsListAllDocument } from "@/gql/graphql";
import { ProductList } from "@/components/organisms/ProductList";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";
import { Pagination } from "@/components/molecules/Pagination";

const ProductsPage = async ({
	params,
	searchParams,
}: {
	params: { [key: string]: string };
	searchParams: { take: string };
}) => {
	const defaultTake = 8;
	let pageNumber = 1;
	if (params.pageNumber) {
		pageNumber = +params.pageNumber;
	}
	const skip = (pageNumber - 1) * (+searchParams.take || defaultTake);

	const numberOfproducts = await executeGraphql(ProductsListAllDocument, {});
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		take: +searchParams.take || defaultTake,
		skip: skip,
	});

	const take = +searchParams.take || defaultTake;
	const totalProducts = numberOfproducts.products.meta.total;

	const products: ProductOnPage[] = graphqlResponse.products.data.map((product) => {
		return {
			id: product.id,
			imageSrc: product.images[0]?.url || "",
			name: product.name,
			price: product.price || 0,
			type: product.categories[0]?.name || "",
		};
	});

	return (
		<>
			<ProductList products={products} />
			<Pagination
				take={take}
				totalProducts={totalProducts}
				path="products"
				currentPage={pageNumber}
			/>
		</>
	);
};

export default ProductsPage;

export const generateMetadata = async (): Promise<Metadata> => {
	const title = "Wszystkie produkty";
	const description = "Wszystko co najlepsze - mojadomena.pl";

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: "",
					width: 800,
					height: 600,
					alt: "",
				},
			],
			url: `http://localhost:3000/product/`,
		},
		twitter: {
			site: "@MyTwitter",
			title,
			description,
			images: `http://localhost:3000/images/`,
		},
		metadataBase: new URL("http://localhost:3000"),
	};
};
