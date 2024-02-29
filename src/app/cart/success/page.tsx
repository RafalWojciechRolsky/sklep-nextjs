import { type Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function SuccessCartPage({
	searchParams,
}: {
	searchParams: { sessionId: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	if (!searchParams.sessionId) {
		redirect("/");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.sessionId);

	return (
		<section className="mt-10 flex flex-col items-center justify-center gap-2">
			<h2>{stripeCheckoutSession.payment_status}</h2>
			<Link href={"/"} className="bg-slate-400 px-4 py-2">
				koszyk
			</Link>
		</section>
	);
}

export const generateMetadata = async (): Promise<Metadata> => {
	const title = "Strona koszyka - zamówienie przyjęte z sukcesem";
	const description = "Wszystko co najlepsze - mojadomena.pl";

	return {
		title,
		description,
	};
};
