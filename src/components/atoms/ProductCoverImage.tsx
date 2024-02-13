/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react';

interface IPropsTypes {
	src: string;
	name: string;
	productPage?: boolean;
}

export const ProductCoverImage: FC<IPropsTypes> = ({ src, name, productPage = false }) => {
	return (
		<figure className="overflow-hidden rounded-md duration-200 ease-out hover:scale-105">
			<img src={src} alt={name} className={`${productPage ? 'h-96 w-80 object-cover' : ''} `} />
		</figure>
	);
};
