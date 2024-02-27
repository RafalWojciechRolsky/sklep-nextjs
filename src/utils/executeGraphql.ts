import { type TypedDocumentString } from "@/gql/graphql";
import { type GraphQLResponse } from "@/types/types";

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	next,
	cache,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
	headers?: HeadersInit;
}): Promise<TResult> => {
	const graphqlUrl = process.env.GRAPHQL_URL_API;
	if (!graphqlUrl) {
		throw TypeError("GRAPHQL_URL_API is not defined or not a string");
	}

	const res = await fetch(graphqlUrl, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		next,
		cache,
	});
	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error("Product not found");
	}

	return graphqlResponse.data;
};
