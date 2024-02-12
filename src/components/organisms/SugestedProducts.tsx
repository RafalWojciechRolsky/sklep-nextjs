import { ProductList } from '@/components/organisms/ProductList';
import { getProducts } from '@/utils/getProducts';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SugestedProducts = async () => {
	const products = await getProducts();
	await sleep(3000);
	return <ProductList products={products.slice(-4)} />;
};
