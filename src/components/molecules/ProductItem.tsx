import { type FC } from "react";
import { type Product } from "@/types/types";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";

interface IPropsTypes {
	product: Product;
}

export const ProductItem: FC<IPropsTypes> = ({ product: { name, src, type, price } }) => {
	return (
		<article className="flex max-w-64 flex-col rounded-md bg-slate-400 p-2">
			<ProductCoverImage src={src} name={name} />
			<ProductDescription name={name} type={type} price={price} />
		</article>
	);
};
