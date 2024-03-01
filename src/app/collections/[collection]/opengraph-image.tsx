import { ImageResponse } from "next/og";
import { CollectionGetBySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const runtime = "edge";

export const size = {
	width: 500,
	height: 500,
};

export const alt = "Open Graph Image";
export const contentType = "image/png";
const title = "Kolekcja - Dostępna na mojadomena.pl";

export default async function OpengraphImage({ params }: { params: { collection: string } }) {
	const graphqlResponseCollections = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug: params.collection,
		},
	});

	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-4xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
				}}
			>
				<p tw="m-0 mt-2 text-center">{title}</p>
				<p tw="text-center text-white">{graphqlResponseCollections.collection?.name}</p>
				<img
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
