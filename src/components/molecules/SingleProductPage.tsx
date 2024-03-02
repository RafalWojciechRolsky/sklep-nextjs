import { type ProductOnPage } from "@/types/types";
import { SingleProductDescription } from "@/components/atoms/SingleProductDescription";
import { SingleProductImage } from "@/components/atoms/SingleProductImage";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { addProductToCartAction } from "@/app/actions/addProductToCartAction";
import { ReviewForm } from "@/components/molecules/reviewForm";

export const SingleProductPage = async ({
	product,
}: {
	product: ProductOnPage;
	params: { productId: string };
}) => {
	const { name, imageSrc, type, price, description = "", id } = product;

	return (
		<>
			<article className="mx-auto mb-10 flex max-w-[45rem] flex-row items-start justify-center gap-10 p-4">
				<div>
					<SingleProductDescription
						name={name}
						type={type}
						price={price}
						description={description}
					/>
					<form action={addProductToCartAction}>
						<AddToCartButton />
						<input type="hidden" value={product.id} name="product.id" />
						<input type="hidden" value={product.name} name="product.name" />
						<input
							type="number"
							min={1}
							max={10}
							name="quantity"
							placeholder="1"
							defaultValue={1}
						/>
					</form>
				</div>
				<SingleProductImage imageSrc={imageSrc} name={name} />
			</article>
			<ReviewForm _productId={id} />
		</>
	);
};
