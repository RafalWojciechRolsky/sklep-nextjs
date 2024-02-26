import { ProductAddToCartDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const addProductToCart = async (cartId: string, productId: string, quantity: number) => {
	"use server";

	await executeGraphql(ProductAddToCartDocument, {
		id: cartId,
		productId,
		quantity,
	});
};
