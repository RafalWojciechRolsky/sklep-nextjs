import { ProductsGetListDocument } from "@/gql/graphql";

import { ProductList } from "@/components/organisms/ProductList";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

const ProductsPage = async ({}: { searchParams: { [key: string]: string } }) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take: 8 });

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
