import { cookies } from "next/headers";
import { CartFindOrCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const getOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const graphqlResponse = await executeGraphql(CartFindOrCreateDocument, {
			id: cartId,
		});

		if (graphqlResponse.cartFindOrCreate.id) {
			return graphqlResponse.cartFindOrCreate.id;
		}
	} else {
		const graphqlResponse = await executeGraphql(CartFindOrCreateDocument, {});
		cookies().set("cartId", graphqlResponse.cartFindOrCreate.id);

		if (graphqlResponse.cartFindOrCreate.id) {
			return graphqlResponse.cartFindOrCreate.id;
		}
	}
};
