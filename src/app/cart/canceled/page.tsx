import { type Metadata } from "next";

export default async function CanceledCartPage() {
	return (
		<div>
			<h1>CanceledCartPage</h1>
		</div>
	);
}

export const generateMetadata = async (): Promise<Metadata> => {
	const title = "Strona koszyka - zamówienie anulowane";
	const description = "Wszystko co najlepsze - mojadomena.pl";

	return {
		title,
		description,
	};
};
