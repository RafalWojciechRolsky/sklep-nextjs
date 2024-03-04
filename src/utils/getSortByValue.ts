import { type ProductSortBy } from "@/gql/graphql";

export const getSortByValue = (value: ProductSortBy | undefined): ProductSortBy => {
	if (!value) {
		return "DEFAULT";
	}
	if (["DEFAULT", "NAME", "PRICE", "RATING"].includes(value)) {
		return value;
	}
	return "DEFAULT";
};
