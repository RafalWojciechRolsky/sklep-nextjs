import { type FC } from 'react';
import { ActiveLink } from '@/components/atoms/ActiveLink';

interface IPropsTypes {
	name?: string;
}

export const Header: FC<IPropsTypes> = (_props) => {
	return (
		<header className="mx-auto max-w-2xl  px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-gray-900 py-6 bg-gray-100">
			<nav>
				<ul className="flex justify-center gap-4">
					<li>
						<ActiveLink
							href="/"
							activeClassName="underline"
							className="text-blue-400 font-bold hover:text-blue-600"
						>
							Home
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							href="/products"
							activeClassName="underline"
							className="text-blue-400 font-bold hover:text-blue-600"
						>
							Produkty
						</ActiveLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
