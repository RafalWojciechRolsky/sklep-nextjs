'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import Link from 'next/link';

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
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	const combinedClassName = isActive
		? `${className ?? ''} ${activeClassName ?? ''}`
		: className ?? '';

	return (
		<Link
			href={{ pathname: href }}
			className={combinedClassName}
			aria-current={isActive ? 'page' : undefined}
		>
			{children}
		</Link>
	);
};
