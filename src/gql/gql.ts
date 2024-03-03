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
    "mutation ChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    items {\n      quantity\n    }\n  }\n}": types.ChangeItemQuantityDocument,
    "mutation CartIdFindOrCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    id\n  }\n}": types.CartIdFindOrCreateDocument,
    "query CartProducts2GetByCartId($id: ID!) {\n  cart(id: $id) {\n    items {\n      product {\n        id\n      }\n      quantity\n    }\n  }\n}": types.CartProducts2GetByCartIdDocument,
    "query CartProductsGetByCartId($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}": types.CartProductsGetByCartIdDocument,
    "mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    items {\n      product {\n        id\n        name\n      }\n    }\n  }\n}": types.CartRemoveItemDocument,
    "query Categories {\n  categories {\n    data {\n      id\n      slug\n      name\n    }\n  }\n}": types.CategoriesDocument,
    "query CategoryGetBySlug($slug: String!) {\n  category(slug: $slug) {\n    name\n  }\n}": types.CategoryGetBySlugDocument,
    "query CategoryGetBySlugWithProductsImages($slug: String!) {\n  category(slug: $slug) {\n    name\n    products {\n      images {\n        url\n      }\n    }\n  }\n}": types.CategoryGetBySlugWithProductsImagesDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collection(slug: $slug) {\n    name\n    slug\n    id\n    products {\n      ...FragmentProduct\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetAll {\n  collections {\n    data {\n      name\n      slug\n      id\n    }\n  }\n}": types.CollectionsGetAllDocument,
    "fragment FragmentProduct on Product {\n  id\n  name\n  price\n  categories {\n    name\n  }\n  images {\n    url\n  }\n}": types.FragmentProductFragmentDoc,
    "fragment FragmentProductsInCart on Cart {\n  items {\n    product {\n      id\n      name\n      price\n    }\n    quantity\n  }\n}": types.FragmentProductsInCartFragmentDoc,
    "fragment FragmentReview on ReviewList {\n  data {\n    author\n    title\n    rating\n    description\n  }\n}": types.FragmentReviewFragmentDoc,
    "query OrderGetById($id: ID!) {\n  order(id: $id) {\n    id\n    status\n    totalAmount\n    lines\n  }\n}": types.OrderGetByIdDocument,
    "mutation ProductAddToCart($id: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}": types.ProductAddToCartDocument,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...FragmentProduct\n    description\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsGetByCategoryDocument,
    "query ProductsGetIdsList {\n  products {\n    data {\n      id\n    }\n  }\n}": types.ProductsGetIdsListDocument,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsListAll {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.ProductsListAllDocument,
    "query ProductsNameGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      name\n    }\n  }\n}": types.ProductsNameGetByCategoryDocument,
    "query ProductsSearchList($search: String, $take: Int) {\n  products(search: $search, take: $take) {\n    data {\n      ...FragmentProduct\n    }\n  }\n}": types.ProductsSearchListDocument,
    "query RatingProductGetById($id: ID) {\n  product(id: $id) {\n    rating\n  }\n}": types.RatingProductGetByIdDocument,
    "mutation ReviewsProductAddById($productId: ID!, $author: String!, $email: String!, $description: String!, $title: String!, $rating: Int!) {\n  reviewCreate(\n    productId: $productId\n    author: $author\n    email: $email\n    description: $description\n    title: $title\n    rating: $rating\n  ) {\n    id\n  }\n}": types.ReviewsProductAddByIdDocument,
    "query ReviewsProductGetById($id: ID) {\n  product(id: $id) {\n    reviews {\n      title\n      description\n      rating\n      author\n      email\n    }\n  }\n}": types.ReviewsProductGetByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    items {\n      quantity\n    }\n  }\n}"): typeof import('./graphql').ChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartIdFindOrCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    id\n  }\n}"): typeof import('./graphql').CartIdFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartProducts2GetByCartId($id: ID!) {\n  cart(id: $id) {\n    items {\n      product {\n        id\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartProducts2GetByCartIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartProductsGetByCartId($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      product {\n        id\n        name\n        price\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartProductsGetByCartIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    items {\n      product {\n        id\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
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
export function graphql(source: "query CategoryGetBySlugWithProductsImages($slug: String!) {\n  category(slug: $slug) {\n    name\n    products {\n      images {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoryGetBySlugWithProductsImagesDocument;
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
export function graphql(source: "fragment FragmentProductsInCart on Cart {\n  items {\n    product {\n      id\n      name\n      price\n    }\n    quantity\n  }\n}"): typeof import('./graphql').FragmentProductsInCartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment FragmentReview on ReviewList {\n  data {\n    author\n    title\n    rating\n    description\n  }\n}"): typeof import('./graphql').FragmentReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrderGetById($id: ID!) {\n  order(id: $id) {\n    id\n    status\n    totalAmount\n    lines\n  }\n}"): typeof import('./graphql').OrderGetByIdDocument;
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query RatingProductGetById($id: ID) {\n  product(id: $id) {\n    rating\n  }\n}"): typeof import('./graphql').RatingProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewsProductAddById($productId: ID!, $author: String!, $email: String!, $description: String!, $title: String!, $rating: Int!) {\n  reviewCreate(\n    productId: $productId\n    author: $author\n    email: $email\n    description: $description\n    title: $title\n    rating: $rating\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewsProductAddByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsProductGetById($id: ID) {\n  product(id: $id) {\n    reviews {\n      title\n      description\n      rating\n      author\n      email\n    }\n  }\n}"): typeof import('./graphql').ReviewsProductGetByIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
