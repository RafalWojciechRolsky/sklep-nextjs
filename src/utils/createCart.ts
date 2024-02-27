import { CartIdFindOrCreateDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const createCart = async () => {
	const graphqlResponse = await executeGraphql({
		query: CartIdFindOrCreateDocument,
		variables: {},
	});
	return graphqlResponse.cartFindOrCreate.id;
};
