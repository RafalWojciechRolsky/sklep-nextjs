import { cookies } from "next/headers";
import { CartTable } from "@/components/molecules/CartTable";
import { getProductsFromCart } from "@/utils/getProductsFromCart";

const CartPage = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return (
			<div>
				<h1>Koszyk jest pusty</h1>
			</div>
		);
	}
	try {
		const products = (await getProductsFromCart(cartId)) || [];

		return (
			<div className="">
				<h1>Koszyk</h1>
				<CartTable products={products} />
			</div>
		);
	} catch (error) {
		console.log(error);
		return (
			<div className="">
				<h1>Koszyk jest pusty</h1>
			</div>
		);
	}
};

export default CartPage;
