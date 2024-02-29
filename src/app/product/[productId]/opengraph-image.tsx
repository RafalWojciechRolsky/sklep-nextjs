import { ImageResponse } from "next/og";
import NextImage from "next/image";
import { ProductGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const runtime = "edge";

export const size = {
	width: 500,
	height: 500,
};

export const alt = "Open Graph Image";
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: { productId: string } }) {
	const response = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: params.productId },
	});

	return new ImageResponse(
		(
			<div tw="bg-red-400" style={{ width: size.width, height: size.height }}>
				<h1 tw="text-center text-white">{response.product?.name} - Dostępny na mojadomena.pl</h1>
				<p tw="text-center text-white">{response.product?.description}</p>
				<p tw="text-center text-white">{response.product?.categories[0]?.name}</p>
				<NextImage
					src={response.product?.images[0]?.url || ""}
					alt={response.product?.name || ""}
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
