import { ProductCoverImage } from "@/components/atoms/ProductCoverImage";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { type ProductOnPage } from "@/types/types";

export const SingleProductPage = async ({
	product,
}: {
	product: ProductOnPage;
	singlePage: boolean;
}) => {
	const { name, imageSrc, type, price, description } = product;
	return (
		<article className="mx-auto mb-10 flex max-w-[50rem] flex-row items-start justify-center gap-10 p-4">
			<ProductCoverImage src={imageSrc} name={name} productPage={true} />
			<ProductDescription name={name} type={type} price={price} description={description} />
		</article>
	);
};
