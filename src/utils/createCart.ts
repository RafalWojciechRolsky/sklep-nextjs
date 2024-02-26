import { CartIdFindOrCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const createCart = async () => {
	const graphqlResponse = await executeGraphql(CartIdFindOrCreateDocument, {});
	return graphqlResponse.cartFindOrCreate.id;
};
