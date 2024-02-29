import { ImageResponse } from "next/og";
import NextImage from "next/image";
import { CollectionGetBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const runtime = "edge";

export const size = {
	width: 500,
	height: 500,
};

export const alt = "Open Graph Image";
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: { collection: string } }) {
	const graphqlResponseCollections = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: params.collection,
		},
	});

	return new ImageResponse(
		(
			<div tw="bg-red-400" style={{ width: size.width, height: size.height }}>
				<h1 tw="text-center text-white">Kolekcja - Dostępna na mojadomena.pl</h1>
				<p tw="text-center text-white">{graphqlResponseCollections.collection?.name}</p>
				<NextImage
					src={graphqlResponseCollections.collection?.products[0]?.images[0]?.url || ""}
					alt={graphqlResponseCollections.collection?.name || ""}
					width={size.width / 5}
					height={size.height / 5}
				/>
			</div>
		),
		{
			width: size.width,
			height: size.height,
		},
	);
}
