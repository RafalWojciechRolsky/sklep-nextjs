"use server";

import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import { addProductToCart } from "@/utils/addProductToCart";
import { getOrCreateCartId } from "@/utils/getOrCreateCartId";
import { executeGraphql } from "@/utils/executeGraphql";
import { CartProducts2GetByCartIdDocument, ChangeItemQuantityDocument } from "@/gql/graphql";

export const addProductToCartAction = async (formData: FormData) => {
	const cart = await getOrCreateCartId();

	if (cart) {
		cookies().set("cartId", cart, {
			httpOnly: true,
			sameSite: "lax",
		});

		try {
			const response = await executeGraphql({
				query: CartProducts2GetByCartIdDocument,
				variables: {
					id: cart,
				},
			});

			const listOfProductsInCard = response.cart?.items;

			const productInTheCart = listOfProductsInCard?.find(
				(item) => item.product?.id === formData.get("product.id"),
			);

			if (productInTheCart) {
				await executeGraphql({
					query: ChangeItemQuantityDocument,
					variables: {
						cartId: cart,
						productId: formData.get("product.id") as string,
						quantity: productInTheCart.quantity + Number(formData.get("quantity")),
					},
					next: {
						tags: ["cart"],
					},
				});
			} else {
				await addProductToCart(
					cart,
					formData.get("product.id") as string,
					Number(formData.get("quantity")),
				);
				revalidatePath("/");
				revalidateTag("cart");
			}
		} catch (error) {
			console.log(error);
		}
	} else {
		console.log("No CartId");
	}
};
