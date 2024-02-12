import { type FC } from 'react';
import { priceFormat } from '@/utils/priceFormat';

interface IPropsTypes {
	name: string;
	type: string;
	price: number;
}

export const ProductDescription: FC<IPropsTypes> = ({ name, type, price }) => {
	return (
		<section className="flex flex-1 flex-col justify-between gap-2 pt-1 text-gray-900">
			<h2>{name}</h2>
			<div className="flex flex-col">
				<p className="text-xs text-gray-500">{type}</p>
				<p className="font-semibold ">{priceFormat(price, 'pl-PL', 'PLN')}</p>
			</div>
		</section>
	);
};
