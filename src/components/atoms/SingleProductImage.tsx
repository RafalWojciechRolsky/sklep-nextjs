import { type FC } from "react";
import NextImage from "next/image";

interface IPropsTypes {
	name: string;
	imageSrc: string;
}

export const SingleProductImage: FC<IPropsTypes> = ({ name, imageSrc }) => {
	return (
		<figure className="overflow-hidden rounded-md duration-200 ease-out hover:scale-105">
			<NextImage width={384} height={384} src={imageSrc} alt={name} />
		</figure>
	);
};
