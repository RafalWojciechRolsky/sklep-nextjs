import { ProductList } from '@/components/organisms/ProductList';
import { getProducts } from '@/utils/getProducts';

export default async function ProductsPage() {
	const products = await getProducts();
	return <ProductList products={products} />;
}
