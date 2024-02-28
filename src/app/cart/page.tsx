import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getProductsFromCart } from "@/utils/getProductsFromCart";
import { priceFormat } from "@/utils/priceFormat";
import { ChangeProductQuantity } from "@/components/atoms/changeProductQuantity";
import { RemoveButton } from "@/components/atoms/RemoveButton";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const products = (await getProductsFromCart()) || [];

	async function handleStripePaymentAction() {
		"use server";

		const striperSecretKey = process.env.STRIPE_SECRET_KEY as string;

		const stripe = new Stripe(striperSecretKey, {
			apiVersion: "2023-10-16",
			typescript: true,
		});

		if (!cartId) {
			redirect("/");
		}

		const checkoutSession = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			metadata: {
				cartId,
			},
			line_items: products.map((item) => {
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.product.name,
						},
						unit_amount: item.product.price,
					},
					quantity: item.quantity,
				};
			}),
			mode: "payment",
			success_url: `http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}`,
			cancel_url: `http://localhost:3000/cart/canceled`,
		});
		console.log(checkoutSession);
		if (checkoutSession.url) {
			redirect(checkoutSession.url);
		}
	}

	return (
		<div className="overflow-x-auto">
			<h1 className="my-4 text-xl font-semibold text-gray-900">Order summary</h1>
			<div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
				<table className="min-w-full table-fixed leading-normal">
					<thead>
						<tr>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
								Product
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
								Quantity
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
								Price
							</th>
							<th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
								Remove
							</th>
						</tr>
					</thead>
					<tbody>
						{products.map((item) => {
							if (!item.product) {
								redirect("/");
							}
							return (
								<tr key={item.product.id}>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										{item.product.name}
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<ChangeProductQuantity
											productId={item.product.id}
											cartId={cartId}
											quantity={item.quantity}
										/>
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										{priceFormat(item.product.price, "PL-pl", "PLN")}
									</td>
									<td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
										<RemoveButton cartId={cartId} productId={item.product.id} />
									</td>
								</tr>
							);
						})}
						<tr>
							<td
								className="border-t-2 border-gray-200 bg-gray-100 px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-gray-700"
								colSpan={2}
							>
								Total
							</td>
							<td className="border-t-2 border-gray-200 bg-gray-100 px-5 py-3 text-sm">
								{priceFormat(
									products.reduce((acc, item) => acc + item.quantity * item.product.price, 0),
									"PL-pl",
									"PLN",
								)}
							</td>
							<td className="border-t-2 border-gray-200 bg-gray-100 px-5 py-3 text-sm"></td>
						</tr>
					</tbody>
				</table>
				<form action={handleStripePaymentAction}>
					<button
						type="submit"
						className="w-full rounded-sm border bg-slate-100 px-8 py-2 shadow-sm transition-colors hover:bg-slate-200"
					>
						Pay
					</button>
				</form>
			</div>
		</div>
	);
}
