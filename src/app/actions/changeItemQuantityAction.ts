"use server";

import { revalidateTag } from "next/cache";
import { ChangeItemQuantityDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const changeItemQuantityAction = async (
	cartId: string,
	productId: string,
	quantity: number,
) => {
	await executeGraphql({
		query: ChangeItemQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");
};
