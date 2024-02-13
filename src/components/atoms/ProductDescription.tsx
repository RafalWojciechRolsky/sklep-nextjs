import { type FC } from 'react';
import { priceFormat } from '@/utils/priceFormat';

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
	description = '',
	longDescription = '',
}) => {
	return (
		<section className="flex flex-1 flex-col justify-between gap-2 pt-1 text-gray-900 mt-8">
			<h1 className={`${description && 'text-3xl font-bold'}`}>{name}</h1>
			<div className="flex flex-col">
				<p className="text-xs text-gray-500">{type}</p>
				<p className={`${description ? 'text-2xl font-bold pb-4' : 'font-semibold'}`}>
					{priceFormat(price, 'pl-PL', 'PLN')}
				</p>

				{description && (
					<>
						<p className="text-xs text-gray-500 pb-4">{description}</p>
						<h2 className="text-xs text-gray-500">{longDescription}</h2>
					</>
				)}
			</div>
		</section>
	);
};
