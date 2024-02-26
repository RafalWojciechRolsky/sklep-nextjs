// import { redirect } from "next/navigation";
import Overlay from "@/app/@modal/(.)cart/Overlay";
import { CartTable } from "@/components/molecules/CartTable";
import { getOrCreateCartId } from "@/utils/getOrCreateCartId";
import { getProductsFromCart } from "@/utils/getProductsFromCart";

const ModalPage = async () => {
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
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white text-slate-800">
				<CartTable products={products} />
			</div>
		</>
	);
};

export default ModalPage;
