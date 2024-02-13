/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	publicRuntimeConfig: {
		metadataBase: 'https://sklep-nextjs-theta.vercel.app/',
	},
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
