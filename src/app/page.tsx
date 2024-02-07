import { ProductList } from "@/components/organisms/ProductList";

export default function Home() {
	return (
		<section className="flex h-screen w-full items-center justify-center bg-white">
			<ProductList />
		</section>
	);
}
