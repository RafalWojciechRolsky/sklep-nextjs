import { ProductList } from '@/components/organisms/ProductList';
import { getProducts } from '@/utils/getProducts';

export default async function ProductsPage({
	searchParams,
}: { searchParams: { [key: string]: string } }) {
	const numerbOfProducts = searchParams.tab || '20';

	const products = await getProducts(numerbOfProducts);
	return <ProductList products={products} />;
}
