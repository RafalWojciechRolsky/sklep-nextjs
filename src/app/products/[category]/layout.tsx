import { type ReactNode } from "react";
import { CategoriesDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const generateStaticParams = async () => {
	const graphqlResponse = await executeGraphql(CategoriesDocument, {});
	return graphqlResponse.categories.data.map((category) => {
		return { category: category.slug };
	});
};

const CategoryProductLayout = ({ children }: { children: ReactNode }) => {
	return children;
};

export default CategoryProductLayout;
