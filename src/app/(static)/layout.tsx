import { type Metadata } from "next";
import { type ReactNode } from "react";

interface IPropsTypes {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: "Zasady",
};

const PageLayout = ({ children }: IPropsTypes) => {
	return <main className="mx-auto max-w-2xl text-gray-900">{children}</main>;
};

export default PageLayout;
