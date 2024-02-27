"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { addProductToCart } from "@/utils/addProductToCart";
import { getOrCreateCartId } from "@/utils/getOrCreateCartId";

export const addProductToCartAction = async (formData: FormData) => {
	const cart = await getOrCreateCartId();

	if (cart) {
		cookies().set("cartId", cart, {
			httpOnly: true,
			sameSite: "lax",
		});

		try {
			await addProductToCart(
				cart,
				formData.get("product.id") as string,
				Number(formData.get("quantity")),
			);
			revalidateTag("cart");
		} catch (error) {
			console.log(error);
		}
	} else {
		console.log("No CartId");
	}
};
