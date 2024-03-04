"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent, useState } from "react";

export const SortProductsBy = () => {
	const router = useRouter();
	const [orderBy, setOrderBy] = useState("DEFAULT");

	const DEFAULT = `?order=ASC&orderBy=DEFAULT`;
	const PRICEUP = `?order=ASC&orderBy=PRICE`;
	const PRICEDOWN = `?order=DESC&orderBy=PRICE`;
	const RATINGUP = `?order=ASC&orderBy=RATING`;
	const RATINGDOWN = `?order=DESC&orderBy=RATING`;

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		setOrderBy(e.target.value);
		if (e.target.value === "DEFAULT") {
			router.replace(`/products/1${DEFAULT}`);
		} else {
			router.replace(`/products/1${e.target.value}`);
		}
	};

	return (
		<div className="mr-20 flex justify-end">
			<select value={orderBy} onChange={handleChange} className="px-6 py-2">
				<option value={"DEFAULT"}>DEFAULT</option>
				<option data-testid="sort-by-price" value={PRICEUP}>
					PRICEUP
				</option>
				<option data-testid="sort-by-price" value={PRICEDOWN}>
					PRICEDOWN
				</option>
				<option data-testid="sort-by-rating" value={RATINGUP}>
					RATINGUP
				</option>
				<option data-testid="sort-by-rating" value={RATINGDOWN}>
					RATINGDOWN
				</option>
			</select>
		</div>
	);
};
