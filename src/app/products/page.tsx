import { ProductsGetListDocument } from "@/gql/graphql";

import { ProductList } from "@/components/organisms/ProductList";
import { executeGraphql, productResponseItemToProduct } from "@/utils/getProducts";

const ProductsPage = async ({}: { searchParams: { [key: string]: string } }) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	const products = graphqlResponse.products.data.map((product) =>
		productResponseItemToProduct(product),
	);
	return <ProductList products={products} />;
};

export default ProductsPage;
