"use client";

import { useParams, usePathname } from "next/navigation";
import { type ReactNode } from "react";
import Link from "next/link";

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact = false,
}: {
	href: string;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();
	const params = useParams();
	let isActive: boolean;

	if (Object.entries(params).length === 0) {
		isActive = exact ? pathname === href : pathname.startsWith(href);
	} else {
		const pageNumber = params?.pageNumber as string;
		isActive = exact
			? pathname === `${href}${params?.pageNumber && `/${pageNumber}`}`
			: pathname.startsWith(href);
	}

	const combinedClassName = isActive
		? `${className ?? ""} ${activeClassName ?? ""}`
		: className ?? "";

	return (
		<Link
			href={{ pathname: href }}
			className={combinedClassName}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};
