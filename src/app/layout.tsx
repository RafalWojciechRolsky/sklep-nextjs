import type { Metadata } from "next";
import { Fira_Code, Fira_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";

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
