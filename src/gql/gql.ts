/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartFindOrCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    id\n  }\n}": types.CartFindOrCreateDocument,
    "query CartGetById($id: ID!) {\n  order(id: $id) {\n    createdAt\n  }\n}": types.CartGetByIdDocument,
    "query Categories {\n  categories {\n    data {\n      id\n      slug\n      name\n    }\n  }\n}": types.CategoriesDocument,
    "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}": types.CategoryGetBySlugDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    slug\n    id\n    products {\n      ...FragmentProduct\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetAll {\n  collections {\n    data {\n      name\n      slug\n      id\n    }\n  }\n}": types.CollectionsGetAllDocument,
    "fragment FragmentProduct on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}": types.FragmentProductFragmentDoc,
    "mutation ProductAddToCart($id: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}": types.ProductAddToCartDocument,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...FragmentProduct\n    description\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsGetByCategoryDocument,
    "query ProductsGetIdsList {\n  products {\n    data {\n      id\n    }\n  }\n}": types.ProductsGetIdsListDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsListAll {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.ProductsListAllDocument,
    "query ProductsNameGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      name\n    }\n  }\n}": types.ProductsNameGetByCategoryDocument,
    "query ProductsSearchList($search: String, $take: Int) {\n  products(search: $search, take: $take) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsSearchListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    id\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(id: $id) {\n    createdAt\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Categories {\n  categories {\n    data {\n      id\n      slug\n      name\n    }\n  }\n}"): typeof import('./graphql').CategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    slug\n    id\n    products {\n      ...FragmentProduct\n    }\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetAll {\n  collections {\n    data {\n      name\n      slug\n      id\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FragmentProduct on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').FragmentProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductAddToCart($id: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ProductAddToCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...FragmentProduct\n    description\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...FragmentProduct\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetIdsList {\n  products {\n    data {\n      id\n    }\n  }\n}"): typeof import('./graphql').ProductsGetIdsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsListAll {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsListAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsNameGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductsNameGetByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSearchList($search: String, $take: Int) {\n  products(search: $search, take: $take) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}"): typeof import('./graphql').ProductsSearchListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
