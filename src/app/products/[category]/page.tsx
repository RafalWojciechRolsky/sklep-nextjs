import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/organisms/ProductList";
import { CategoriesDocument, ProductsGetByCategoryDocument } from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const title = `Kategoria prpduktów: ${params.category}`;
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
