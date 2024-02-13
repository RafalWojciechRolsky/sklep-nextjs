import { ProductCoverImage } from '@/components/atoms/ProductCoverImage';
import { ProductDescription } from '@/components/atoms/ProductDescription';
import { type Product } from '@/types/types';

export const SingleProductPage = async ({ product }: { product: Product; singlePage: boolean }) => {
	const { name, imageSrc, type, price, description, longDescription } = product;
	return (
		<article className="mx-auto max-w-[50rem] flex flex-row gap-10 justify-center items-start p-4 mb-10">
			<ProductCoverImage src={imageSrc} name={name} productPage={true} />
			<ProductDescription
				name={name}
				type={type}
				price={price}
				description={description}
				longDescription={longDescription}
			/>
		</article>
	);
};
