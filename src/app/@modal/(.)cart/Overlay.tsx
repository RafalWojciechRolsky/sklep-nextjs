"use client";

import { useRouter } from "next/navigation";

const Overlay = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className="absolute inset-0 z-30 bg-slate-600 opacity-75"
		></div>
	);
};

export default Overlay;
