"use client";

// import { useState } from "react";
import { useOptimistic } from "react";
// import { useRouter } from "next/navigation";
import { changeItemQuantityAction } from "@/app/actions/changeItemQuantityAction";

export const ChangeProductQuantity = ({
	productId,
	quantity,
	cartId,
}: {
	productId: string;
	quantity: number;
	cartId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	// const router = useRouter();
	return (
		<div className="flex flex-row items-center">
			<form>
				<button
					data-testid="decrement"
					className="ml-2 mr-2 w-8 border bg-slate-300 p-2"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeItemQuantityAction(cartId, productId, optimisticQuantity - 1);
						// router.refresh();
					}}
				>
					-
				</button>
			</form>
			<p>{optimisticQuantity}</p>
			<form>
				<button
					data-testid="increment"
					className="ml-2 w-8 border bg-slate-300 p-2"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity + 1);
						await changeItemQuantityAction(cartId, productId, optimisticQuantity + 1);
						// router.refresh();
					}}
				>
					+
				</button>
			</form>
		</div>
	);
};
