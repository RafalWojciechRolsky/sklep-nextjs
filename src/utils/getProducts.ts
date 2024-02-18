import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type GraphQLResponse, type Product, type ProductResponseItem } from "@/types/types";

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

export const getProducts = async (): Promise<Product[]> => {
	const graphqlUrl = process.env.GRAPHQL_URL_API;
	if (typeof graphqlUrl !== "string") {
		throw TypeError("GRAPHQL_URL_API is not defined or not a string");
	}
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	const products = graphqlResponse.products.data.map((product) =>
		productResponseItemToProduct(product),
	);
	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<Product> => {
	const graphqlUrl = process.env.GRAPHQL_URL_API;
	if (typeof graphqlUrl !== "string") {
		throw new Error("GRAPHQL_URL_API is not defined or not a string");
	}

	const res = await fetch(graphqlUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `query GetProductById {
				product(id: ${id}) {
					id
					name
					price
			    categories {
    			  name
    			}
					description
					images {
						url
					}
				}
			}`,
		}),
	});
	const productResponse = (await res.json()) as ProductResponseItem;
	const product = productResponseItemToProduct(productResponse);
	return product;
};

const productResponseItemToProduct = (product: ProductResponseItem): Product => {
	return {
		id: product.id,
		name: product.name,
		price: product.price,
		type: product.categories[0]?.name || "",
		imageSrc: product.images[0]?.url || "",
		description: product.description,
	};
};
