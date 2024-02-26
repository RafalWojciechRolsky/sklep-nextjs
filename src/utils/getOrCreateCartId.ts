import { cookies } from "next/headers";
import { executeGraphql } from "@/utils/executeGraphql";
import { CartIdFindOrCreateDocument } from "@/gql/graphql";

export const getOrCreateCartId = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		try {
			const graphqlResponse = await executeGraphql(CartIdFindOrCreateDocument, {});

			cookies().set("cartId", graphqlResponse.cartFindOrCreate.id, {
				httpOnly: true,
				sameSite: "lax",
			});
			return graphqlResponse.cartFindOrCreate.id;
		} catch (error) {
			console.log(error);
		}
	} else {
		try {
			const graphqlResponse = await executeGraphql(CartIdFindOrCreateDocument, {
				id: cartId,
			});

			return graphqlResponse.cartFindOrCreate.id;
		} catch (error) {
			console.log(error);
		}
	}
};
