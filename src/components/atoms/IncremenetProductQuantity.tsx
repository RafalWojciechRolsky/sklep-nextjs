"use client";

import { useState } from "react";
// import { useOptimistic } from "react";
import { changeItemQuantityAction } from "@/app/actions/changeItemQuantityAction";

export const IncremenetProductQuantity = ({
	productId,
	quantity,
	cartId,
}: {
	productId: string;
	quantity: number;
	cartId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useState(quantity);

	return (
		<div className="flex flex-row items-center">
			<p>{optimisticQuantity}</p>
			<form>
				<button
					className="ml-2 w-8 border bg-slate-300 p-2"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity + 1);
						await changeItemQuantityAction(cartId, productId, optimisticQuantity + 1);
					}}
				>
					+
				</button>
			</form>
		</div>
	);
};
