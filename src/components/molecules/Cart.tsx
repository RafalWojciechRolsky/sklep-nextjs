import { ShoppingCart } from "lucide-react";
import { type FC } from "react";

interface IPropsTypes {
	name?: string;
}

export const Cart: FC<IPropsTypes> = (_props) => {
	return (
		<section className="flex cursor-pointer flex-row gap-3 transition-all duration-300 ease-out hover:text-slate-900">
			<ShoppingCart size={20} />
			<span> 0</span>
		</section>
	);
};
