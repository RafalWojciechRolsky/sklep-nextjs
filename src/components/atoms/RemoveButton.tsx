"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItemFromCartAction } from "@/app/actions/removeItemFromCartAction";

export const RemoveButton = ({ cartId, productId }: { cartId: string; productId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			className="text-red-500 disabled:cursor-wait disabled:text-gray-400"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItemFromCartAction(cartId, productId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
