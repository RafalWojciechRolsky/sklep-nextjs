import { CartIdFindOrCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const getCartById = async (cartId: string) => {
	const graphqlResponse = await executeGraphql(CartIdFindOrCreateDocument, {
		id: cartId,
	});
	return graphqlResponse.cartFindOrCreate.id;
};
