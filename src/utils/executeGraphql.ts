import { type TypedDocumentString } from "@/gql/graphql";
import { type GraphQLResponse } from "@/types/types";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	const graphqlUrl = process.env.GRAPHQL_URL_API;
	if (!graphqlUrl) {
		throw TypeError("GRAPHQL_URL_API is not defined or not a string");
	}

	const res = await fetch(graphqlUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});
	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError("GraphQL Error: ", { cause: graphqlResponse.errors });
	}
	return graphqlResponse.data;
};
