/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react';

interface IPropsTypes {
	src: string;
	name: string;
}

export const ProductCoverImage: FC<IPropsTypes> = ({ src, name }) => {
	return (
		<figure className="overflow-hidden rounded-md duration-200 ease-out hover:scale-105">
			<img src={src} alt={name} />
		</figure>
	);
};
