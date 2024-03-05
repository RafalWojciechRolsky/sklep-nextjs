import { ImageResponse } from "next/og";
import { ProductGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

// export const runtime = "edge";

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

	console.log(response);

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
				<p tw="font-sans uppercase m-0 p-0 text-[50px] leading-4 mb-1">{response.product?.name}</p>
				<p tw="text-center text-white text-2xl">{response.product?.categories[0]?.name}</p>
				<p tw="font-serif m-0 p-0 font-black text-sm px-10 text-center">
					{response.product?.description}
				</p>
				<img
					tw="mt-4"
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
