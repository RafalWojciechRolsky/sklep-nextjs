import { Suspense } from 'react';
import { type Metadata } from 'next';
import { SingleProductPage } from '@/components/molecules/SingleProductPage';
import { SugestedProducts } from '@/components/organisms/SugestedProducts';
import { getProductById } from '@/utils/getProducts';

interface Product {
	params: { productId: string };
}

// export const generateStaticParams = async () => {
// 	const products = await getProducts();
// 	return products.map((product) => {
// 		return { productId: product.id };
// 	});
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [{ url: product.imageSrc }],
		},
	};
};

const ProductPage = async ({ params }: Product) => {
	const product = await getProductById(params.productId);
	return (
		<>
			<div className="text-gray-900">
				<SingleProductPage singlePage={true} product={product} />
			</div>
			<aside>
				<Suspense fallback={<div>Loading...</div>}>
					<SugestedProducts />
				</Suspense>
			</aside>
		</>
	);
};

export default ProductPage;
