import { type Product, type ProductResponseItem } from '@/types/types';

export async function getProducts(numberOfProducts = '20') {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${numberOfProducts}`);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProduct);
	return products;
}

export async function getProductById(id: ProductResponseItem['id']) {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductResponseItem;
	const product = productResponseItemToProduct(productsResponse);
	return product;
}

const productResponseItemToProduct = (product: ProductResponseItem): Product => {
	return {
		id: product.id,
		name: product.title,
		type: product.category,
		price: product.price,
		imageSrc: product.image,
		description: product.description,
		longDescription: product.longDescription,
	};
};
