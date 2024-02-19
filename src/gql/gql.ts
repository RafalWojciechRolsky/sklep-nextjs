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
    "query Categories {\n  categories {\n    data {\n      id\n      slug\n      name\n    }\n  }\n}": types.CategoriesDocument,
    "fragment FragmentProduct on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}": types.FragmentProductFragmentDoc,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...FragmentProduct\n    description\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsGetByCategoryDocument,
    "query ProductsGetIdsList {\n  products {\n    data {\n      id\n    }\n  }\n}": types.ProductsGetIdsListDocument,
    "query ProductsGetList($take: Int) {\n  products(take: $take) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Categories {\n  categories {\n    data {\n      id\n      slug\n      name\n    }\n  }\n}"): typeof import('./graphql').CategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FragmentProduct on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').FragmentProductFragmentDoc;
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
export function graphql(source: "query ProductsGetList($take: Int) {\n  products(take: $take) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
