import { notFound } from "next/navigation";
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

	return <ProductList products={products} />;
};

export default CollectionPage;
