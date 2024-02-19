import { CategoriesDocument, ProductsNameGetByCategoryDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	const graphqlResponseCategories = await executeGraphql(CategoriesDocument, {});
	const graphqlResponse = await executeGraphql(ProductsNameGetByCategoryDocument, {
		slug: params.category,
	});

	const totalProducts = graphqlResponse.category?.products.length;
	if (!totalProducts) {
		return [{ pageNumber: "1" }];
	}
	const productsPerPage = 2;
	const totalPages = Math.ceil(totalProducts / productsPerPage);

	const test = graphqlResponseCategories.categories.data
		.map((category) => {
			console.log(category.slug, params.category);

			if (category.slug === params.category) {
				const pages = Array.from({ length: totalPages }).map((_page, i) => {
					return { pageNumber: String(i + 1) };
				});
				return pages;
			}
		})
		.filter((t) => t !== undefined)[0];
	if (test) {
		return [...test];
	} else {
		return [];
	}
};

const CategoryProductPage = ({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string };
}) => {
	return (
		<div className="">
			<h1>
				Produkty z kategorii {category} ze stony {pageNumber}
			</h1>
		</div>
	);
};

export default CategoryProductPage;
