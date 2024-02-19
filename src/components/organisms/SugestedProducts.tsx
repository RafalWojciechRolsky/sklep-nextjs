import { ProductList } from "@/components/organisms/ProductList";
import { ProductsGetListDocument } from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SugestedProducts = async () => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take: 4 });

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
		<section data-testid="related-products">
			<ProductList products={products} />
		</section>
	);
};
