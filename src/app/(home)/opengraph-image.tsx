import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
	width: 500,
	height: 500,
};

export const alt = "Open Graph Image";
export const contentType = "image/png";
const title = "Wszystkie produkty";
const description = "Wszystko co najlepsze - mojadomena.pl";

export default async function OpengraphImage() {
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
				<p tw="m-0 mt-2 text-2xl text-center px-10">{description}</p>
			</div>
		),
		{
			width: size.width,
			height: size.height,
		},
	);
}
