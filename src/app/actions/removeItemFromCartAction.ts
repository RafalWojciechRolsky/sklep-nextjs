"use server";

import { CartRemoveItemDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const removeItemFromCartAction = async (cartId: string, productId: string) => {
	await executeGraphql({
		query: CartRemoveItemDocument,
		variables: {
			cartId,
			productId,
		},
		next: {
			tags: ["cart"],
		},
	});
};
