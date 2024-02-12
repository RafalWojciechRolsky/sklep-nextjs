import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Sklep Muzyczny - Next JS Masters',
	description: 'Tutorial Next JS Masters',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<Header />
				<section className="mx-auto min-h-screen max-w-2xl bg-white px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-gray-900">
					{children}
				</section>
				<Footer />
			</body>
		</html>
	);
}
