import { type FC } from "react";
import { type Product } from "@/types/types";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";

interface IPropsTypes {
	product: Product;
}

export const ProductItem: FC<IPropsTypes> = ({ product: { name, src, type, price } }) => {
	return (
		<li className="max-w-64 rounded-md bg-gray-200 p-2">
			<article className="flex h-full flex-col">
				<ProductCoverImage src={src} name={name} />
				<ProductDescription name={name} type={type} price={price} />
			</article>
		</li>
	);
};
