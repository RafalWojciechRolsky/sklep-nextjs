'use client';

import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
import Link from 'next/link';

import clsx from 'clsx';

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={{ pathname: href }}
			className={clsx('text-blue-400 font-bold hover:text-blue-600', {
				underline: isActive,
			})}
		>
			{children}
		</Link>
	);
};
