import { cookies } from "next/headers";
import { executeGraphql } from "@/utils/executeGraphql";
import { CartProductsGetByCartIdDocument } from "@/gql/graphql";

export const getProductsFromCart = async (cartId: string) => {
	const cartIdFromCookie = cookies().get("cartId")?.value;

	if (cartIdFromCookie === cartId) {
		const graphqlResponse = await executeGraphql(CartProductsGetByCartIdDocument, {
			id: cartId,
		});
		return graphqlResponse.cart?.items;
	}

	console.log("cookie id !== session id");
	return [];
};
