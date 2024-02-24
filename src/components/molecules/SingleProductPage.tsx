import { type ProductOnPage } from "@/types/types";
import { SingleProductDescription } from "@/components/atoms/SingleProductDescription";
import { SingleProductImage } from "@/components/atoms/SingleProductImage";

export const SingleProductPage = async ({ product }: { product: ProductOnPage }) => {
	const { name, imageSrc, type, price, description = "" } = product;

	const addToCartAction = async (formData: FormData) => {
		"use server";
		console.log(formData);
	};

	return (
		<article className="mx-auto mb-10 flex max-w-[45rem] flex-row items-start justify-center gap-10 p-4">
			<div>
				<SingleProductDescription name={name} type={type} price={price} description={description} />
				<form action={addToCartAction}>
					<input type="hidden" value={product.id} name="product.id" />
					<input type="text" name="name" />
					<button
						type="submit"
						className="rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-all duration-200 hover:shadow-md"
					>
						Do Koszyka
					</button>
				</form>
			</div>
			<SingleProductImage imageSrc={imageSrc} name={name} />
		</article>
	);
};
