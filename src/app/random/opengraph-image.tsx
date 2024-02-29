import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
	width: 500,
	height: 500,
};

export const alt = "Open Graph Image";
export const contentType = "image/png";
const title = "4 losowe produkty";
const description = `${title} - mojadomena.pl`;

export default async function OpengraphImage() {
	return new ImageResponse(
		(
			<div tw="bg-red-400" style={{ width: size.width, height: size.height }}>
				<h1 tw="text-center text-white">{title} - Dostępny na mojadomena.pl</h1>
				<p tw="text-center text-white">{description}</p>
			</div>
		),
		{
			width: size.width,
			height: size.height,
		},
	);
}
