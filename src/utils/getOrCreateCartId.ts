import { cookies } from "next/headers";
import { getCartById } from "@/utils/getCartById";
import { createCart } from "@/utils/createCart";

export const getOrCreateCartId = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	} else {
		const cart = await createCart();
		if (!cart) {
			throw new Error("Could not create cart");
		}
		return cart;
	}
};
