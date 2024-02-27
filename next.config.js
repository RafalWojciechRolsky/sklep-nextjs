/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	async redirects() {
		return [
			{
				source: "/categories/accessories",
				destination: "/categories/accessories/1",
				permanent: false,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: false,
			},
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
			},
			{
				protocol: "http",
				hostname: "localhost:3000",
			},
		],
	},
	publicRuntimeConfig: {
		metadataBase: "http://localhost:3000",
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
