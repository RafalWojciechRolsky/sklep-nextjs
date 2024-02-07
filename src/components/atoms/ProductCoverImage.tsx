/* eslint-disable @next/next/no-img-element */
import { type FC } from "react";

interface IPropsTypes {
	src: string;
	name: string;
}

export const ProductCoverImage: FC<IPropsTypes> = ({ src, name }) => {
	return (
		<figure className="h-62 w-62 relative overflow-hidden rounded-md">
			<img src={`./images/${src}`} alt={name} />
		</figure>
	);
};
