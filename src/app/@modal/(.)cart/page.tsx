// import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Overlay from "@/app/@modal/(.)cart/Overlay";
import { CartTable } from "@/components/molecules/CartTable";
import { getProductsFromCart } from "@/utils/getProductsFromCart";

const ModalPage = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		return (
			<>
				<Overlay />
				<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white text-slate-800">
					Koszyk jest pusty
				</div>
			</>
		);
	}
	try {
		const products = (await getProductsFromCart(cartId)) || [];

		return (
			<>
				<Overlay />
				<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white text-slate-800">
					<CartTable products={products} />
				</div>
			</>
		);
	} catch (error) {
		console.log(error);
		return (
			<>
				<Overlay />
				<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white text-slate-800">
					Koszyk jest pusty
				</div>
			</>
		);
	}
};

export default ModalPage;
