// export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
// 	if (params.category === 'category1') {
// 		return [{ pageNumber: '1' }, { pageNumber: '2' }];
// 	} else if (params.category === 'category2') {
// 		return [{ pageNumber: '1' }];
// 	}
// 	return [];
// };

import { CategoriesDocument, ProductsNameGetByCategoryDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	console.log("🚀 ~ generateStaticParams ~ params:", params);
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
					return { pageNumber: i + 1 };
				});
				return pages;
			}
		})
		.filter((t) => t !== undefined)[0];
	console.log("🚀 ~ generateStaticParams ~ test:", test);
	// if (params.category === "t-shirts") {
	// 	return [{ pageNumber: "1" }, { pageNumber: "2" }];
	// } else if (params.category === "accessories") {
	// 	return [{ pageNumber: "1" }];
	// }
	return [];
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
