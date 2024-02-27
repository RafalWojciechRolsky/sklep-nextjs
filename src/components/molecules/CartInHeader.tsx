import { ShoppingCart } from "lucide-react";
import { type FC } from "react";

interface IPropsTypes {
	quantity: number;
}

export const CartInHeader: FC<IPropsTypes> = ({ quantity }) => {
	return (
		<section className="flex cursor-pointer flex-row gap-3 transition-all duration-300 ease-out hover:text-slate-900">
			<ShoppingCart size={20} />
			<span> {quantity}</span>
		</section>
	);
};
