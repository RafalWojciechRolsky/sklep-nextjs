import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { ProductList } from "@/components/organisms/ProductList";
import { CollectionDocument, type FragmentProductFragment } from "@/gql/graphql";
import { type ProductOnPage } from "@/types/types";
import { executeGraphql } from "@/utils/executeGraphql";

const CollectionPage = async ({ params }: { params: { collection: string } }) => {
	const graphqlResponseCollections = await executeGraphql(CollectionDocument, {
		slug: params.collection,
	});
	const productsResponse = graphqlResponseCollections.collection
		?.products as FragmentProductFragment[];

	if (!productsResponse || productsResponse.length === 0) {
		notFound();
	}

	const products: ProductOnPage[] = productsResponse.map((product) => {
		return {
			id: product.id,
			imageSrc: product.images[0]?.url || "",
			name: product.name,
			price: product.price || 0,
			type: product.categories[0]?.name || "",
		};
	});

	return (
		<>
			<h1 className="mb-10 text-center text-3xl font-semibold text-slate-900">
				{graphqlResponseCollections.collection?.name}
			</h1>
			<ProductList products={products} />;
		</>
	);
};

export default CollectionPage;

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	const graphqlResponseCollections = await executeGraphql(CollectionDocument, {
		slug: params.collection,
	});
	const title = graphqlResponseCollections.collection?.name;
	const description = "Wszystko co najlepsze - mojadomena.pl";

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: "",
					width: 800,
					height: 600,
					alt: "",
				},
			],
			url: `http://localhost:3000/product/`,
		},
		twitter: {
			site: "@MyTwitter",
			title,
			description,
			images: `http://localhost:3000/images/`,
		},
		metadataBase: new URL("http://localhost:3000"),
	};
};
