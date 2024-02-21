import { type FC } from "react";
import { priceFormat } from "@/utils/priceFormat";

interface IPropsTypes {
	name: string;
	type: string;
	price: number;
	description: string;
}

export const SingleProductDescription: FC<IPropsTypes> = ({ name, price, type, description }) => {
	return (
		<section className="mt-8 flex flex-1 flex-col justify-between gap-2 pt-1 text-gray-900">
			<h1 className="text-3xl font-bold">{name}</h1>
			<div className="flex flex-col">
				<p className="text-xs text-gray-500">{type}</p>
				<p className="pb-4 font-mono text-2xl font-bold">{priceFormat(price, "pl-PL", "PLN")}</p>
				<p className="pb-4 font-sans text-xs text-gray-500">{description}</p>
			</div>
		</section>
	);
};
