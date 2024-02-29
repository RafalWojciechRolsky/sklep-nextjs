// import getConfig from "next/config";
// import type { Metadata } from "next";
import { Fira_Code, Fira_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { type Metadata } from "next";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

// interface PublicRuntimeConfig {
// 	metadataBase: string;
// }

// interface Config {
// 	publicRuntimeConfig: PublicRuntimeConfig;
// }

// const { publicRuntimeConfig } = getConfig() as Config;
// const { metadataBase } = publicRuntimeConfig;

const firaCode = Fira_Code({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	variable: "--font-firaCode",
	display: "swap",
});
const firaSans = Fira_Sans({
	subsets: ["latin", "latin-ext"],
	weight: ["300", "400", "700"],
	variable: "--font-firaSans",
	display: "swap",
});
const montserrat = Montserrat({
	subsets: ["latin", "latin-ext"],
	weight: "variable",
	variable: "--font-montserrat",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Sklep Testowy - Next JS 14 Masters",
	description: "Tutorial Next JS Masters",
	// openGraph: {
	// 	title: "Sklep Testowy - Next JS 14 Masters",
	// 	description: "Tutorial Next JS Masters",
	// 	url: metadataBase,
	// 	siteName: "Next.js",
	// 	images: [
	// 		{
	// 			url: `${metadataBase}/_next/image?url=https%3A%2F%2Fstatic-ourstore.hyperfunctor.com%2Fuploads%2FLe_Xqj_A3d_Tl_S6lyl5w87u_5e18f7a94f.png&w=384&q=75`,
	// 			width: 800,
	// 			height: 600,
	// 		},
	// 		{
	// 			url: `${metadataBase}/_next/image?url=https%3A%2F%2Fstatic-ourstore.hyperfunctor.com%2Fuploads%2FLe_Xqj_A3d_Tl_S6lyl5w87u_5e18f7a94f.png&w=384&q=75`,
	// 			width: 1800,
	// 			height: 1600,
	// 			alt: "My custom alt",
	// 		},
	// 	],
	// 	locale: "en_US",
	// 	type: "website",
	// },
	// twitter: {
	// 	card: "summary_large_image",
	// 	title: "Sklep Testowy - Next JS 14 Masters",
	// 	description: "Tutorial Next JS Masters",
	// 	images: [
	// 		`${metadataBase}/_next/image?url=https%3A%2F%2Fstatic-ourstore.hyperfunctor.com%2Fuploads%2FLe_Xqj_A3d_Tl_S6lyl5w87u_5e18f7a94f.png&w=384&q=75`,
	// 	],
	// },
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="pl" className={`${firaCode.variable} ${firaSans.variable} ${montserrat.variable}`}>
			<body>
				<Header />
				<section className="mx-auto min-h-screen max-w-2xl bg-white px-4 py-16 text-slate-700 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					{children}
				</section>
				<Footer />
				{modal}
			</body>
		</html>
	);
}
