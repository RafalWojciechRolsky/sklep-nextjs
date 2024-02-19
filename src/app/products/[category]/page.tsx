import { notFound } from "next/navigation";
import { ProductList } from "@/components/organisms/ProductList";
import { CategoriesDocument, ProductsGetByCategoryDocument } from "@/gql/graphql";
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
	const graphqlResponseCategories = await executeGraphql(CategoriesDocument, {});
	const graphqlResponseCategoriesList = graphqlResponseCategories.categories.data;

	const testCategory = graphqlResponseCategoriesList.filter((obj) => {
		return category === obj.slug;
	});

	if (testCategory.length === 0) {
		notFound();
	}

	const graphqlResponse = await executeGraphql(ProductsGetByCategoryDocument, { slug: category });
	const productsData = graphqlResponse.category?.products || [];

	const products: ProductOnPage[] = productsData.map((product) => {
		return {
			id: product.id,
			imageSrc: product.images[0]?.url || "",
			name: product.name,
			price: product.price || 0,
			type: "",
		};
	});

	return <ProductList products={products} />;
};

export default CategoryProductPage;
