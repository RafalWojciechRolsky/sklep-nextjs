import { type Metadata } from "next";
import { ProductsGetListDocument } from "@/gql/graphql";
import { ProductList } from "@/components/organisms/ProductList";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

const ProductsPage = async ({ searchParams }: { searchParams: { take: string; skip: string } }) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		take: +searchParams.take || 20,
		skip: +searchParams.skip || 0,
	});

	const products: ProductOnPage[] = graphqlResponse.products.data.map((product) => {
		return {
			id: product.id,
			imageSrc: product.images[0]?.url || "",
			name: product.name,
			price: product.price || 0,
			type: product.categories[0]?.name || "",
		};
	});
	return <ProductList products={products} />;
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
