import { ProductList } from "@/components/organisms/ProductList";
import { ProductsGetByCategoryDocument } from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "category1") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else if (params.category === "category2") {
		return [{ pageNumber: "1" }];
	}

	return [];
};

const CategoryProductPage = async ({ params: { category } }: { params: { category: string } }) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategoryDocument, { slug: category });

	const productsData = graphqlResponse.category?.products || [];

	const products: ProductOnPage[] = productsData.map((product) => {
		return {
			id: product.id,
			description: product.description,
			imageSrc: product.images[0]?.url || "",
			name: product.name,
			price: product.price || 0,
			type: "",
		};
	});

	return <ProductList products={products} />;
};

export default CategoryProductPage;
