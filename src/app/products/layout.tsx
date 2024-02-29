import { type ReactNode } from "react";

interface IPropsTypes {
	children: ReactNode;
}

const PageLayout = ({ children }: IPropsTypes) => {
	return <div>{children}</div>;
};

export default PageLayout;
