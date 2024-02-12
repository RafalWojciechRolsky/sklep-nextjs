import Link from 'next/link';
import type { FC } from 'react';

interface IPropsTypes {
	name?: string;
}

export const Footer: FC<IPropsTypes> = (_props) => {
	return (
		<footer className="mx-auto max-w-2xl bg-gray-100 py-8 lg:max-w-7xl">
			<p className="text-center text-gray-900">@ 2024</p>
			<section className="mt-4 flex flex-row justify-center gap-8 text-center text-gray-900">
				<Link href="/">Home</Link>
				<Link href="/regulamin">Regulamin</Link>
				<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
			</section>
		</footer>
	);
};
