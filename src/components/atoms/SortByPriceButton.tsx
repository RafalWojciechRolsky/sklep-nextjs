"use client";

import { useRouter } from "next/navigation";

export const SortByPriceButton = () => {
	const router = useRouter();

	return (
		<form>
			<button
				data-testid="sort-by-price"
				type="submit"
				className="mr-20 bg-blue-500 px-5 py-2 text-white transition-colors duration-300 ease-out hover:bg-blue-700"
				onClick={(e) => {
					e.preventDefault();
					router.replace("/products/1?orderBy=PRICE");
				}}
			>
				SORT BY PRICE
			</button>
		</form>
	);
};
