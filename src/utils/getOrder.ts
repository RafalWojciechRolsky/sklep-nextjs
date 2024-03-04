import { type SortDirection } from "@/gql/graphql";

export const getOrder = (value: SortDirection | undefined): SortDirection => {
	if (!value) {
		return "ASC";
	}
	if (["ASC", "DESC"].includes(value)) {
		return value;
	}
	return "ASC";
};
