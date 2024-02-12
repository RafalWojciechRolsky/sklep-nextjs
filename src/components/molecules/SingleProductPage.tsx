import { ProductCoverImage } from '@/components/atoms/ProductCoverImage';
import { ProductDescription } from '@/components/atoms/ProductDescription';
import { type Product } from '@/types/types';

export const SingleProductPage = async ({
	product,
	singlePage,
}: { product: Product; singlePage: boolean }) => {
	const { name, src, type, price } = product;
	return (
		<article
			className={`${singlePage ? 'max-auto max-w-full flex flex-row ' : 'flex h-full flex-col'}`}
		>
			<ProductCoverImage src={src} name={name} />
			<ProductDescription name={name} type={type} price={price} />
		</article>
	);
};
