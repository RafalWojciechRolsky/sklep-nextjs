import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
	width: 500,
	height: 500,
};

export const alt = "Open Graph Image";
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: { [key: string]: string } }) {
	console.log("OpengraphImage: ", params);

	return new ImageResponse(
		(
			<div tw="bg-red-400" style={{ width: size.width, height: size.height }}>
				{JSON.stringify(params, null, 2)}
			</div>
		),
		{
			width: size.width,
			height: size.height,
		},
	);
}
