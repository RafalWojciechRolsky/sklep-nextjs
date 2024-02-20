import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/organisms/ProductList";
import {
	ProductsNameGetByCategoryDocument,
	CategoriesDocument,
	ProductsGetByCategoryDocument,
} from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";

import { executeGraphql } from "@/utils/executeGraphql";

const CategoryProductPage = async ({
	params,
	searchParams,
}: {
	params: { category: string };
	searchParams: { take: string };
}) => {
	const graphqlResponseCategories = await executeGraphql(CategoriesDocument, {});
	const graphqlResponseCategoriesList = graphqlResponseCategories.categories.data;

	const testCategory = graphqlResponseCategoriesList.filter((obj) => {
		return params.category === obj.slug;
	});

	if (testCategory.length === 0) {
		notFound();
	}

	const graphqlResponse = await executeGraphql(ProductsGetByCategoryDocument, {
		slug: params.category,
	});
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

	return <ProductList products={products} />;
};

export default CategoryProductPage;

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
