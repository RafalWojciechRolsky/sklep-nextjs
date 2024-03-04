import { type FC } from "react";
import { priceFormat } from "@/utils/priceFormat";

interface IPropsTypes {
	name: string;
	type: string;
	price: number;
	rating: number | undefined;
}

export const ProductDescription: FC<IPropsTypes> = ({ name, type, price, rating }) => {
	return (
		<section className="mt-8 flex flex-1 flex-col justify-between gap-2 pt-1 text-gray-900">
			<h2 className="text-xl font-bold">{name}</h2>
			<div>
				<p className="text-xs text-gray-500">{type}</p>
				<div className="flex flex-row justify-between">
					<p data-testid="product-price" className="pb-4 font-mono font-bold">
						{priceFormat(price, "pl-PL", "PLN")}
					</p>
					{rating && (
						<p className="text-xs text-gray-500" data-testid="product-rating">
							{rating}
						</p>
					)}
				</div>
			</div>
		</section>
	);
};
