"use client";

import { useRouter } from "next/navigation";

export const SortByRatingButton = () => {
	const router = useRouter();

	return (
		<form>
			<button
				data-testid="sort-by-price"
				type="submit"
				className="mr-20 bg-yellow-200 px-5 py-2 text-slate-700 transition-colors duration-300 ease-out hover:bg-yellow-400"
				onClick={(e) => {
					e.preventDefault();
					router.replace("/products/1?orderBy=RATING");
				}}
			>
				SORT BY RATING
			</button>
		</form>
	);
};
