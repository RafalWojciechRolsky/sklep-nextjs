import { type ProductOnPage } from "@/types/types";
import { SingleProductDescription } from "@/components/atoms/SingleProductDescription";
import { SingleProductImage } from "@/components/atoms/SingleProductImage";

export const SingleProductPage = async ({
	product,
}: {
	product: ProductOnPage;
	singlePage: boolean;
}) => {
	const { name, imageSrc, type, price, description = "" } = product;
	return (
		<article className="mx-auto mb-10 flex max-w-[45rem] flex-row items-start justify-center gap-10 p-4">
			<SingleProductDescription name={name} type={type} price={price} description={description} />
			<SingleProductImage imageSrc={imageSrc} name={name} />
		</article>
	);
};
