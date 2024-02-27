import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/organisms/ProductList";
import {
	ProductsNameGetByCategoryDocument,
	CategoriesDocument,
	ProductsGetByCategoryDocument,
	CategoryGetBySlugDocument,
} from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";

import { executeGraphql } from "@/utils/executeGraphql";

const CategoryProductPage = async ({
	params,
	searchParams,
}: {
	params: { [key: string]: string };
	searchParams: { take: string };
}) => {
	const graphqlResponseCategories = await executeGraphql({
		query: CategoriesDocument,
		variables: {},
	});
	const graphqlResponseCategoriesList = graphqlResponseCategories.categories.data;
	const graphqlResponseCategoryName = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: {
			slug: params.category as string,
		},
	});
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategoryDocument,
		variables: {
			slug: params.category as string,
		},
	});

	const testCategory = graphqlResponseCategoriesList.filter((obj) => {
		return params.category === obj.slug;
	});

	if (testCategory.length === 0) {
		notFound();
	}

	const productsData = graphqlResponse.category?.products || [];

	const products: ProductOnPage[] = productsData
		.map((product) => {
			return {
				id: product.id,
				imageSrc: product.images[0]?.url || "",
				name: product.name,
				price: product.price || 0,
				type: product.categories[0]?.name || "",
			};
		})
		.slice(0, +searchParams.take || 8);

	return (
		<>
			<h1 className="mb-10 text-center text-3xl font-semibold text-slate-900">
				{graphqlResponseCategoryName.category?.name}
			</h1>
			<ProductList products={products} />
		</>
	);
};

export default CategoryProductPage;

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const graphqlResponseCategoryName = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: {
			slug: params.category,
		},
	});

	const title = `Kategoria produktów: ${graphqlResponseCategoryName.category?.name}`;
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

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	const graphqlResponseCategories = await executeGraphql({
		query: CategoriesDocument,
		variables: {},
	});
	const graphqlResponse = await executeGraphql({
		query: ProductsNameGetByCategoryDocument,
		variables: {
			slug: params.category,
		},
	});

	const totalProducts = graphqlResponse.category?.products.length;
	if (!totalProducts) {
		return [{ pageNumber: "1" }];
	}
	const productsPerPage = 2;
	const totalPages = Math.ceil(totalProducts / productsPerPage);

	const test = graphqlResponseCategories.categories.data
		.map((category) => {
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
