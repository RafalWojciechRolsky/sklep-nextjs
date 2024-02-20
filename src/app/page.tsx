import { ProductList } from "@/components/organisms/ProductList";
import { ProductsGetListDocument } from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

const HomePage = async ({ searchParams }: { searchParams: { take: string; skip: string } }) => {
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
	return (
		<>
			<h1 className="mb-10 text-center text-3xl font-semibold text-slate-900">
				Witamy w naszym sklepie
			</h1>
			<ProductList products={products} />;
		</>
	);
};

export default HomePage;
