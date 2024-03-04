import { type Metadata } from "next";
import {
	type ProductSortBy,
	ProductsListAllDocument,
	ProductsSortedByInDirectionDocument,
	type SortDirection,
} from "@/gql/graphql";
import { ProductList } from "@/components/organisms/ProductList";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";
import { Pagination } from "@/components/molecules/Pagination";
import { SortByPriceButton } from "@/components/atoms/SortByPriceButton";
import { getOrder } from "@/utils/getOrder";
import { getSortByValue } from "@/utils/getSortByValue";
import { SortByRatingButton } from "@/components/atoms/SortByRatingButton";

const ProductsPage = async ({
	params,
	searchParams,
}: {
	params: { [key: string]: string };
	searchParams: {
		take: string;
		order: SortDirection | undefined;
		orderBy: ProductSortBy | undefined;
	};
}) => {
	const defaultTake = 8;
	let pageNumber = 1;
	if (params.pageNumber) {
		pageNumber = +params.pageNumber;
	}
	const skip = (pageNumber - 1) * (+searchParams.take || defaultTake);

	const numberOfproducts = await executeGraphql({
		query: ProductsListAllDocument,
		variables: {},
		next: {
			revalidate: 60,
		},
	});
	const graphqlResponse = await executeGraphql({
		query: ProductsSortedByInDirectionDocument,
		variables: {
			order: getOrder(searchParams.order),
			orderBy: getSortByValue(searchParams.orderBy),
			take: +searchParams.take || defaultTake,
			skip: skip,
		},
		next: {
			tags: ["ProductsPage"],
		},
	});

	const order = getOrder(searchParams.order);
	const orderBy = getSortByValue(searchParams.orderBy);
	const take = +searchParams.take || defaultTake;
	const totalProducts = numberOfproducts.products?.meta.total;

	const products: ProductOnPage[] = graphqlResponse.products.data.map((product) => {
		return {
			id: product.id,
			imageSrc: product.images[0]?.url || "",
			name: product.name,
			price: product.price || 0,
			type: product.categories[0]?.name || "",
			rating: product.rating || undefined,
		};
	});

	console.log({ products });

	return (
		<>
			<h1 className="mb-10 text-center text-3xl font-semibold text-slate-900">All Products</h1>
			<div className="flex justify-end">
				<SortByRatingButton />
				<SortByPriceButton />
			</div>
			<ProductList products={products} />
			<Pagination
				take={take}
				totalProducts={totalProducts}
				path="products"
				currentPage={pageNumber}
				order={order}
				orderBy={orderBy}
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
	};
};
