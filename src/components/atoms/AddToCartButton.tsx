"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="mr-6 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-all duration-200 hover:shadow-md disabled:cursor-wait disabled:bg-slate-300"
		>
			Do Koszyka
		</button>
	);
};
