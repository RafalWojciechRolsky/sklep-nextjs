import { type Metadata } from "next";
import { executeGraphql } from "@/utils/executeGraphql";
import { ProductGetByIdDocument, ProductsGetIdsListDocument } from "@/gql/graphql";
import { getRandomElements } from "@/utils/getRandomElement";
import { ProductList } from "@/components/organisms/ProductList";
import { type ProductOnPage } from "@/types/types";

const RandomPage = async () => {
	const graphqlResponseIds = await executeGraphql({
		query: ProductsGetIdsListDocument,
		variables: {},
	});
	const listOfIds = graphqlResponseIds.products.data;

	const selectedElements = getRandomElements(listOfIds, 4);
	const randomProducts = await Promise.all(
		selectedElements.map(async (el) => {
			return executeGraphql({ query: ProductGetByIdDocument, variables: { id: el.id } });
		}),
	);

	const products = randomProducts.map((product) => {
		return {
			id: product.product?.id,
			imageSrc: product.product?.images[0]?.url || "",
			name: product.product?.name,
			price: product.product?.price || 0,
			type: product.product?.categories[0]?.name || "",
		};
	}) as ProductOnPage[];

	return (
		<section className="px-10">
			<h1 className="mb-10 text-center text-3xl font-semibold text-slate-900">Random products</h1>
			<ProductList products={products} />
		</section>
	);
};

export default RandomPage;

export const generateMetadata = async (): Promise<Metadata> => {
	const title = "4 losowe produkty";
	const description = `${title} - mojadomena.pl`;

	return {
		title,
		description,
	};
};
