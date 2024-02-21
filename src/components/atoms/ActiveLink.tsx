"use client";

import { useParams, usePathname } from "next/navigation";
import { type ReactNode } from "react";
import Link from "next/link";

type HrefObject = {
	pathname: string;
	query?: { [key: string]: number };
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = false,
}: {
	href: HrefObject;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const params = useParams();
	let isActive: boolean;

	console.log(pathname, href.pathname);

	if (Object.entries(params).length === 0) {
		isActive = exact ? pathname === href.pathname : pathname.startsWith(href.pathname);
	} else if (pathname === href.pathname) {
		isActive = true;
	} else {
		const pageNumber = params?.pageNumber as string;
		isActive = exact
			? pathname === `${href.pathname}${params?.pageNumber && `/${pageNumber}`}`
			: pathname.startsWith(href.pathname);
	}

	const combinedClassName = isActive
		? `${className ?? ""} ${activeClassName ?? ""}`
		: className ?? "";

	if (href.query?.take) {
		return (
			<Link
				href={{ pathname: href.pathname, query: { take: href.query?.take } }}
				className={combinedClassName}
				aria-current={isActive ? "page" : undefined}
			>
				{children}
			</Link>
		);
	} else {
		return (
			<Link
				href={{ pathname: href.pathname }}
				className={combinedClassName}
				aria-current={isActive ? "page" : undefined}
			>
				{children}
			</Link>
		);
	}
};
