import { redirect } from "next/navigation";
import { ProductList } from "@/components/organisms/ProductList";
import { ProductsSearchListDocument } from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

const SearchPage = async ({ searchParams }: { searchParams: { query: string } }) => {
	if (/[\.\-\\?\!\/@#\$%\^&\*\(\)=\+\[\]\{\};:'",<>\`~]/.test(searchParams.query)) {
		redirect("/");
	}

	const graphqlResponse = await executeGraphql(ProductsSearchListDocument, {
		search: searchParams.query,
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
			<h1 className="mb-10 text-center text-3xl font-semibold text-slate-900">Search results</h1>
			<ProductList products={products} />
		</>
	);
};

export default SearchPage;
