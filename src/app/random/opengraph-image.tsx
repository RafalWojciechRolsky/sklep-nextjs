import { ImageResponse } from "next/og";

// export const runtime = "edge";

export const size = {
	width: 500,
	height: 500,
};

export const alt = "Open Graph Image";
export const contentType = "image/png";
// const title = "Wszystkie produkty";
// const description = "Wszystko co najlepsze - mojadomena.pl";

export default async function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
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
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">next13</p>
				<p tw="font-serif m-0 p-0 font-black">masters</p>
				<p tw="m-0 mt-2">Random</p>
			</div>
		),
		{
			width: size.width,
			height: size.height,
		},
	);
}

// <div tw="bg-red-400" style={{ width: size.width, height: size.height }}>
// 	<h1 tw="text-center text-white">{title} - Dostępny na mojadomena.pl</h1>
// 	<p tw="text-center text-white">{description}</p>
// </div>
