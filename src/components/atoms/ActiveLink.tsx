"use client";

import { useParams, usePathname } from "next/navigation";
import { type ReactNode } from "react";
import Link from "next/link";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

type HrefObject = {
	pathname: string;
	query?: { take: number; order: SortDirection; orderBy: ProductSortBy };
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
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

	return (
		<Link
			href={{
				pathname: href.pathname,
				query: {
					take: href.query?.take || 8,
					order: href.query?.order || "ASC",
					orderBy: href.query?.orderBy || "DEFAULT",
				},
			}}
			className={combinedClassName}
			aria-current={isActive ? "page" : undefined}
			shallow={shallow}
		>
			{children}
		</Link>
	);
};
