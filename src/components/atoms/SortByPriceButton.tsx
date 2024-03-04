"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const SortByPriceButton = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	// const [buttonVisible, setButtonVisible] = useState(true);

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	// useEffect(() => {
	// 	setButtonVisible(true);
	// }, []);

	return (
		<form className="flex justify-end">
			<button
				data-testid="sort-by-price"
				type="submit"
				// style={{ display: buttonVisible ? "block" : "none" }}
				className="mr-20 bg-blue-500 px-5 py-2 text-white transition-colors duration-300 ease-out hover:bg-blue-700"
				onClick={(e) => {
					e.preventDefault();

					const text = `${String(pathname)}?${createQueryString("orderBy", "PRICE")}`;
					console.log(text);

					router.replace("/products/1?orderBy=PRICE");
				}}
			>
				SORT BY PRICE
			</button>
		</form>
	);
};
