import { type FC } from "react";
import { priceFormat } from "@/utils/priceFormat";

interface IPropsTypes {
	name: string;
	type: string;
	price: number;
	description?: string;
	longDescription?: string;
}

export const ProductDescription: FC<IPropsTypes> = ({
	name,
	type,
	price,
	description = "",
	longDescription = "",
}) => {
	return (
		<section className="mt-8 flex flex-1 flex-col justify-between gap-2 pt-1 text-gray-900">
			<h1 className={`${description && "text-3xl font-bold"}`}>{name}</h1>
			<div className="flex flex-col">
				<p className="text-xs text-gray-500">{type}</p>
				<p
					className={`${description ? "pb-4 font-mono text-2xl font-bold" : "font-mono font-semibold"}`}
				>
					{priceFormat(price, "pl-PL", "PLN")}
				</p>

				{description && (
					<>
						<p className="pb-4 font-sans text-xs text-gray-500">{description}</p>
						<h2 className="font-mono text-xs text-gray-500">{longDescription}</h2>
					</>
				)}
			</div>
		</section>
	);
};
