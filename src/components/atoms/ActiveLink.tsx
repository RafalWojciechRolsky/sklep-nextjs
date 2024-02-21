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
	activeClassName = "border-blue-500",
	exact = false,
	shallow = true,
}: {
	href: HrefObject;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
	shallow?: boolean;
}) => {
	const pathname = usePathname();
	const params = useParams();
	let isActive: boolean;

	if (Object.entries(params).length === 0) {
		isActive = exact ? pathname === href.pathname : pathname.startsWith(href.pathname);
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
				shallow={shallow}
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
				shallow={shallow}
			>
				{children}
			</Link>
		);
	}
};
