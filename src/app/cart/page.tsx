import { CartTable } from "@/components/molecules/CartTable";
import { getOrCreateCartId } from "@/utils/getOrCreateCartId";
import { getProductsFromCart } from "@/utils/getProductsFromCart";

const CartPage = async () => {
	const cartId = await getOrCreateCartId();

	if (!cartId) {
		return (
			<div>
				<h1>Koszyk jest pusty</h1>
			</div>
		);
	}

	const products = (await getProductsFromCart(cartId)) || [];

	return (
		<div className="">
			<h1>Koszyk</h1>
			<CartTable products={products} />
		</div>
	);
};

export default CartPage;
