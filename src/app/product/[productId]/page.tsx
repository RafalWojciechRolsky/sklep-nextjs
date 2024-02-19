import { Suspense } from "react";
import { SingleProductPage } from "@/components/molecules/SingleProductPage";
import { SugestedProducts } from "@/components/organisms/SugestedProducts";
import { ProductGetByIdDocument } from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

interface Product {
	params: { productId: string };
}

// export const generateStaticParams = async () => {
// 	const products = await getProducts();
// 	return products.map((product) => {
// 		return { productId: product.id };
// 	});
// };

// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> => {
// 	const product = await getProductById(params.productId);
// 	return {
// 		title: product.name,
// 		description: product.description,
// 		openGraph: {
// 			title: `${product.name} - Dostępny na mojadomena.pl`,
// 			description: product.description,
// 			images: [{ url: product.imageSrc, width: 800, height: 600, alt: product.name }],
// 			url: `http://localhost:3000/product/${params.productId}`,
// 		},
// 		twitter: {
// 			site: "@MyTwitter",
// 			title: `${product.name} - Dostępny na mojadomena.pl`,
// 			description: product.description,
// 			images: `http://localhost:3000/images/${product.imageSrc}`,
// 		},
// 		metadataBase: new URL("http://localhost:3000"),
// 	};
// };

const ProductPage = async ({ params }: Product) => {
	const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});
	const product: ProductOnPage = {
		id: graphqlResponse.product?.id || "",
		description: graphqlResponse.product?.description || "",
		imageSrc: graphqlResponse.product?.images[0]?.url || "",
		name: graphqlResponse.product?.name || "",
		price: graphqlResponse.product?.price || 0,
		type: graphqlResponse.product?.categories[0]?.name || "",
	};
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
