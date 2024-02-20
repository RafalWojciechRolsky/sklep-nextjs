import { type Metadata } from "next";
import { type ReactNode } from "react";

interface IPropsTypes {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: "Products",
	description: "Strona z produktami - mojasuperdomena.pl",
};

const PageLayout = ({ children }: IPropsTypes) => {
	return <div>{children}</div>;
};

export default PageLayout;
