import { ProductList } from "@/components/organisms/ProductList";

export default function Home() {
	return (
		<section className="mx-auto min-h-screen max-w-2xl bg-white px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<h1 className="pb-6 text-center text-2xl font-bold tracking-tight text-gray-900">
				Witamy w naszym sklepie
			</h1>
			<div className="flex flex-wrap justify-center gap-4">
				<ProductList />
			</div>
		</section>
	);
}
