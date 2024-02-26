import { type ProductOnPage } from "@/types/types";
import { SingleProductDescription } from "@/components/atoms/SingleProductDescription";
import { SingleProductImage } from "@/components/atoms/SingleProductImage";
import { getOrCreateCart } from "@/utils/getOrCreateCart";
import { addProductToCart } from "@/utils/addProductToCart";

export const SingleProductPage = async ({
	product,
	params,
}: {
	product: ProductOnPage;
	params: { productId: string };
}) => {
	const { name, imageSrc, type, price, description = "" } = product;

	const addProductToCartAction = async (formData: FormData) => {
		"use server";

		const cartId = (await getOrCreateCart()) as string;

		if (params.productId === formData.get("product.id")) {
			await addProductToCart(cartId, params.productId);
		}
	};

	return (
		<article className="mx-auto mb-10 flex max-w-[45rem] flex-row items-start justify-center gap-10 p-4">
			<div>
				<SingleProductDescription name={name} type={type} price={price} description={description} />
				<form action={addProductToCartAction}>
					<button
						type="submit"
						className="mr-6 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-all duration-200 hover:shadow-md"
					>
						Do Koszyka
					</button>
					<input type="hidden" value={product.id} name="product.id" />
					<input type="hidden" value={product.name} name="product.name" />
					<input type="number" min={1} max={10} name="quantity" placeholder="1" defaultValue={1} />
				</form>
			</div>
			<SingleProductImage imageSrc={imageSrc} name={name} />
		</article>
	);
};
