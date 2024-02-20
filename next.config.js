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
        source: '/categories/accessories',
        destination: '/categories/accessories/1',
        permanent: false, 
      },
      {
        source: '/categories/hoodies',
        destination:  '/categories/hoodies/1',
        permanent: false, 
      },
      {
        source:  '/categories/t-shirts',
        destination: '/categories/t-shirts/1',
        permanent: false, 
      },
      {
        source:  '/products',
        destination: '/products/1',
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
