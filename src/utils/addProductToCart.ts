import { ProductAddToCartDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const addProductToCart = async (cartId: string, productId: string, quantity: number) => {
	try {
		await executeGraphql({
			query: ProductAddToCartDocument,
			variables: {
				id: cartId,
				productId,
				quantity,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
