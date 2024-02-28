import { Overlay } from "@/components/atoms/Overlay";

const ModalCartPage = async () => {
	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-slate-200 text-slate-800">
				Koszyk jest pusty
			</div>
		</>
	);
};

export default ModalCartPage;
