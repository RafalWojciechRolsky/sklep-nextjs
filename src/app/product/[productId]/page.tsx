import { type Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { type ProductOnPage } from "@/types/types";
import { SugestedProducts } from "@/components/organisms/SugestedProducts";
// import { ProductGetByIdDocument, ProductsGetIdsListDocument } from "@/gql/graphql";
import { ProductGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";
import { SingleProductPage } from "@/components/molecules/SingleProductPage";

interface Product {
	params: { productId: string };
}

const ProductPage = async ({ params }: Product) => {
	try {
		const graphqlResponse = await executeGraphql({
			query: ProductGetByIdDocument,
			variables: {
				id: params.productId,
			},
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
					<SingleProductPage product={product} params={params} />
				</div>

				<aside>
					<Suspense fallback={<div>Loading...</div>}>
						<SugestedProducts />
					</Suspense>
				</aside>
			</>
		);
	} catch (error) {
		if (error instanceof Error) {
			if (error.message === "Product not found") {
				notFound();
			} else {
				console.error("An unexpected error occurred:", error.message);
			}
		} else {
			console.error("An unexpected error occurred:", error);
		}
	}
};

export default ProductPage;

//////////////////////////////////////////////

// export const generateStaticParams = async () => {
// 	const graphqlResponse = await executeGraphql(ProductsGetIdsListDocument, {});
// 	return graphqlResponse.products.data.map((product) => {
// 		return { productId: product.id };
// 	});
// };
export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: params.productId },
	});
	return {
		title: graphqlResponse.product?.name,
		description: graphqlResponse.product?.description,
		openGraph: {
			title: `${graphqlResponse.product?.name} - Dostępny na mojadomena.pl`,
			description: graphqlResponse.product?.description,
		},
		twitter: {
			site: "@MyTwitter",
			title: `${graphqlResponse.product?.name} - Dostępny na mojadomena.pl`,
			description: graphqlResponse.product?.description,
		},
		metadataBase: new URL("http://localhost:3000"),
	};
};
