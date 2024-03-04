/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type ChangeItemQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type ChangeItemQuantityMutation = { cartChangeItemQuantity: { items: Array<{ quantity: number }> } };

export type CartIdFindOrCreateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CartIdFindOrCreateMutation = { cartFindOrCreate: { id: string } };

export type CartProducts2GetByCartIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartProducts2GetByCartIdQuery = { cart?: { items: Array<{ quantity: number, product: { id: string } }> } | null };

export type CartProductsGetByCartIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartProductsGetByCartIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number } }> } | null };

export type CartRemoveItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { cartRemoveItem: { items: Array<{ product: { id: string, name: string } }> } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { categories: { data: Array<{ id: string, slug: string, name: string }> } };

export type CategoryGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryGetBySlugQuery = { category?: { name: string } | null };

export type CategoryGetBySlugWithProductsImagesQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryGetBySlugWithProductsImagesQuery = { category?: { name: string, products: Array<{ images: Array<{ url: string }> }> } | null };

export type CollectionGetBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetBySlugQuery = { collection?: { name: string, slug: string, id: string, products: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type CollectionsGetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetAllQuery = { collections: { data: Array<{ name: string, slug: string, id: string }> } };

export type FragmentProductFragment = { id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> };

export type FragmentProductsInCartFragment = { items: Array<{ quantity: number, product: { id: string, name: string, price: number } }> };

export type FragmentReviewFragment = { data: Array<{ author: string, title: string, rating: number, description: string }> };

export type OrderGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type OrderGetByIdQuery = { order?: { id: string, status: OrderStatus, totalAmount: number, lines: unknown } | null };

export type ProductAddToCartMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type ProductAddToCartMutation = { cartAddItem: { id: string } };

export type ProductGetByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductGetByIdQuery = { product?: { description: string, id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> } | null };

export type ProductsGetByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategoryQuery = { category?: { products: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type ProductsGetIdsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsGetIdsListQuery = { products: { data: Array<{ id: string }> } };

export type ProductsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ProductsListAllQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsListAllQuery = { products: { meta: { total: number } } };

export type ProductsNameGetByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsNameGetByCategoryQuery = { category?: { products: Array<{ name: string }> } | null };

export type ProductsSearchListQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsSearchListQuery = { products: { data: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ProductsSortedByInDirectionQueryVariables = Exact<{
  orderBy?: InputMaybe<ProductSortBy>;
  order?: InputMaybe<SortDirection>;
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsSortedByInDirectionQuery = { products: { data: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type RatingProductGetByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type RatingProductGetByIdQuery = { product?: { rating?: number | null } | null };

export type ReviewsProductAddByIdMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  author: Scalars['String']['input'];
  email: Scalars['String']['input'];
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
}>;


export type ReviewsProductAddByIdMutation = { reviewCreate: { id: string } };

export type ReviewsProductGetByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ReviewsProductGetByIdQuery = { product?: { reviews: Array<{ title: string, description: string, rating: number, author: string, email: string }> } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const FragmentProductFragmentDoc = new TypedDocumentString(`
    fragment FragmentProduct on Product {
  id
  name
  price
  categories {
    name
  }
  images {
    url
  }
}
    `, {"fragmentName":"FragmentProduct"}) as unknown as TypedDocumentString<FragmentProductFragment, unknown>;
export const FragmentProductsInCartFragmentDoc = new TypedDocumentString(`
    fragment FragmentProductsInCart on Cart {
  items {
    product {
      id
      name
      price
    }
    quantity
  }
}
    `, {"fragmentName":"FragmentProductsInCart"}) as unknown as TypedDocumentString<FragmentProductsInCartFragment, unknown>;
export const FragmentReviewFragmentDoc = new TypedDocumentString(`
    fragment FragmentReview on ReviewList {
  data {
    author
    title
    rating
    description
  }
}
    `, {"fragmentName":"FragmentReview"}) as unknown as TypedDocumentString<FragmentReviewFragment, unknown>;
export const ChangeItemQuantityDocument = new TypedDocumentString(`
    mutation ChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {
    items {
      quantity
    }
  }
}
    `) as unknown as TypedDocumentString<ChangeItemQuantityMutation, ChangeItemQuantityMutationVariables>;
export const CartIdFindOrCreateDocument = new TypedDocumentString(`
    mutation CartIdFindOrCreate($id: ID) {
  cartFindOrCreate(id: $id, input: {}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartIdFindOrCreateMutation, CartIdFindOrCreateMutationVariables>;
export const CartProducts2GetByCartIdDocument = new TypedDocumentString(`
    query CartProducts2GetByCartId($id: ID!) {
  cart(id: $id) {
    items {
      product {
        id
      }
      quantity
    }
  }
}
    `) as unknown as TypedDocumentString<CartProducts2GetByCartIdQuery, CartProducts2GetByCartIdQueryVariables>;
export const CartProductsGetByCartIdDocument = new TypedDocumentString(`
    query CartProductsGetByCartId($id: ID!) {
  cart(id: $id) {
    id
    items {
      product {
        id
        name
        price
      }
      quantity
    }
  }
}
    `) as unknown as TypedDocumentString<CartProductsGetByCartIdQuery, CartProductsGetByCartIdQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($cartId: ID!, $productId: ID!) {
  cartRemoveItem(id: $cartId, productId: $productId) {
    items {
      product {
        id
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CategoriesDocument = new TypedDocumentString(`
    query Categories {
  categories {
    data {
      id
      slug
      name
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryGetBySlugDocument = new TypedDocumentString(`
    query CategoryGetBySlug($slug: String!) {
  category(slug: $slug) {
    name
  }
}
    `) as unknown as TypedDocumentString<CategoryGetBySlugQuery, CategoryGetBySlugQueryVariables>;
export const CategoryGetBySlugWithProductsImagesDocument = new TypedDocumentString(`
    query CategoryGetBySlugWithProductsImages($slug: String!) {
  category(slug: $slug) {
    name
    products {
      images {
        url
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CategoryGetBySlugWithProductsImagesQuery, CategoryGetBySlugWithProductsImagesQueryVariables>;
export const CollectionGetBySlugDocument = new TypedDocumentString(`
    query CollectionGetBySlug($slug: String!) {
  collection(slug: $slug) {
    name
    slug
    id
    products {
      ...FragmentProduct
    }
  }
}
    fragment FragmentProduct on Product {
  id
  name
  price
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<CollectionGetBySlugQuery, CollectionGetBySlugQueryVariables>;
export const CollectionsGetAllDocument = new TypedDocumentString(`
    query CollectionsGetAll {
  collections {
    data {
      name
      slug
      id
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetAllQuery, CollectionsGetAllQueryVariables>;
export const OrderGetByIdDocument = new TypedDocumentString(`
    query OrderGetById($id: ID!) {
  order(id: $id) {
    id
    status
    totalAmount
    lines
  }
}
    `) as unknown as TypedDocumentString<OrderGetByIdQuery, OrderGetByIdQueryVariables>;
export const ProductAddToCartDocument = new TypedDocumentString(`
    mutation ProductAddToCart($id: ID!, $productId: String!, $quantity: Int!) {
  cartAddItem(
    id: $id
    input: {item: {productId: $productId, quantity: $quantity}}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ProductAddToCartMutation, ProductAddToCartMutationVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID) {
  product(id: $id) {
    ...FragmentProduct
    description
  }
}
    fragment FragmentProduct on Product {
  id
  name
  price
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByCategoryDocument = new TypedDocumentString(`
    query ProductsGetByCategory($slug: String!) {
  category(slug: $slug) {
    products {
      ...FragmentProduct
    }
  }
}
    fragment FragmentProduct on Product {
  id
  name
  price
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategoryQuery, ProductsGetByCategoryQueryVariables>;
export const ProductsGetIdsListDocument = new TypedDocumentString(`
    query ProductsGetIdsList {
  products {
    data {
      id
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetIdsListQuery, ProductsGetIdsListQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int) {
  products(take: $take, skip: $skip) {
    data {
      ...FragmentProduct
    }
  }
}
    fragment FragmentProduct on Product {
  id
  name
  price
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsListAllDocument = new TypedDocumentString(`
    query ProductsListAll {
  products {
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsListAllQuery, ProductsListAllQueryVariables>;
export const ProductsNameGetByCategoryDocument = new TypedDocumentString(`
    query ProductsNameGetByCategory($slug: String!) {
  category(slug: $slug) {
    products {
      name
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsNameGetByCategoryQuery, ProductsNameGetByCategoryQueryVariables>;
export const ProductsSearchListDocument = new TypedDocumentString(`
    query ProductsSearchList($search: String, $take: Int) {
  products(search: $search, take: $take) {
    data {
      ...FragmentProduct
    }
  }
}
    fragment FragmentProduct on Product {
  id
  name
  price
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsSearchListQuery, ProductsSearchListQueryVariables>;
export const ProductsSortedByInDirectionDocument = new TypedDocumentString(`
    query ProductsSortedByInDirection($orderBy: ProductSortBy, $order: SortDirection, $take: Int, $skip: Int) {
  products(take: $take, skip: $skip, orderBy: $orderBy, order: $order) {
    data {
      ...FragmentProduct
    }
  }
}
    fragment FragmentProduct on Product {
  id
  name
  price
  categories {
    name
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsSortedByInDirectionQuery, ProductsSortedByInDirectionQueryVariables>;
export const RatingProductGetByIdDocument = new TypedDocumentString(`
    query RatingProductGetById($id: ID) {
  product(id: $id) {
    rating
  }
}
    `) as unknown as TypedDocumentString<RatingProductGetByIdQuery, RatingProductGetByIdQueryVariables>;
export const ReviewsProductAddByIdDocument = new TypedDocumentString(`
    mutation ReviewsProductAddById($productId: ID!, $author: String!, $email: String!, $description: String!, $title: String!, $rating: Int!) {
  reviewCreate(
    productId: $productId
    author: $author
    email: $email
    description: $description
    title: $title
    rating: $rating
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewsProductAddByIdMutation, ReviewsProductAddByIdMutationVariables>;
export const ReviewsProductGetByIdDocument = new TypedDocumentString(`
    query ReviewsProductGetById($id: ID) {
  product(id: $id) {
    reviews {
      title
      description
      rating
      author
      email
    }
  }
}
    `) as unknown as TypedDocumentString<ReviewsProductGetByIdQuery, ReviewsProductGetByIdQueryVariables>;