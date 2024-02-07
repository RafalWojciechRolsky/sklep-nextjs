import { type FC } from "react";
import { ProductItem } from "@/components/molecules/ProductItem";
import { products } from "@/data/products";

interface IPropsTypes {
	name?: string;
}

export const ProductList: FC<IPropsTypes> = () => {
	return (
		<ul
			data-testid="products-list"
			className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4"
		>
			{products.map((product) => {
				return <ProductItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
