import { type FC } from 'react';
import Link from 'next/link';
import { type Product } from '@/types/types';
import { ProductDescription } from '@/components/atoms/ProductDescription';
import { ProductCoverImage } from '@/components/atoms/ProductCoverImage';

interface IPropsTypes {
	product: Product;
}

export const ProductItem: FC<IPropsTypes> = ({ product: { name, imageSrc, type, price, id } }) => {
	return (
		<li className="max-w-64 h-80 rounded-md bg-gray-200 p-2">
			<Link href={{ pathname: `/product/${id}` }}>
				<article className="flex h-full flex-col">
					<ProductCoverImage src={imageSrc} name={name} />
					<ProductDescription name={name} type={type} price={price} />
				</article>
			</Link>
		</li>
	);
};
