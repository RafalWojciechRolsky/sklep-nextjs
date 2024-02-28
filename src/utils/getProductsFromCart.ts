import { cookies } from "next/headers";
import { executeGraphql } from "@/utils/executeGraphql";
import { CartProductsGetByCartIdDocument } from "@/gql/graphql";

export const getProductsFromCart = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const graphqlResponse = await executeGraphql({
			query: CartProductsGetByCartIdDocument,
			variables: {
				id: cartId,
			},
			cache: "no-cache",
			next: {
				tags: ["cart"],
			},
		});
		return graphqlResponse.cart?.items;
	}

	return [];
};
