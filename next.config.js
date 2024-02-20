/** @type {import('next').NextConfig} */

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		
	},
	async redirects() {
    return [
      {
        source: '/products/accessories',
        destination: '/products/accessories/1',
        permanent: false, 
      },
      {
        source: '/products/hoodies',
        destination:  '/products/hoodies/1',
        permanent: false, 
      },
      {
        source:  '/products/t-shirts',
        destination: '/products/t-shirts/1',
        permanent: false, 
      },
    ]
  },
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-ourstore.hyperfunctor.com',
      },
    ],
  },
	publicRuntimeConfig: {
		metadataBase: 'https://sklep-nextjs-theta.vercel.app/',
	},
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
