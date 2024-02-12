import { type FC } from 'react';
import { ProductItem } from '@/components/molecules/ProductItem';
// import { products } from '@/data/products';
import { type Product } from '@/types/types';

interface IPropsTypes {
	products: Product[];
}

export const ProductList: FC<IPropsTypes> = ({ products }) => {
	return (
		<ul
			data-testid="products-list"
			className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 md:pt-5"
		>
			{products.map((product) => {
				return <ProductItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
