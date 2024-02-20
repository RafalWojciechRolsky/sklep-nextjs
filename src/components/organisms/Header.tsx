import { ActiveLink } from "@/components/atoms/ActiveLink";
import { executeGraphql } from "@/utils/executeGraphql";
import { CategoriesDocument } from "@/gql/graphql";
import { Cart } from "@/components/molecules/Cart";

export const Header = async () => {
	const graphqlResponse = await executeGraphql(CategoriesDocument, {});

	const categories = graphqlResponse.categories.data;
	const navLinks = [
		...categories.map((category) => {
			return {
				href: `/products/${category.slug}`,
				label: category.name,
			};
		}),
	];

	return (
		<header className="mx-auto max-w-2xl  bg-gray-100 px-4 py-6 text-slate-600  sm:px-6 lg:max-w-7xl lg:px-8">
			<nav className="flex flex-row justify-between">
				<ul className="flex justify-center gap-4">
					<li>
						<ActiveLink
							href="/"
							activeClassName="underline"
							className="font-bold transition-all duration-300 ease-out hover:text-slate-900"
							exact
						>
							Home
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							href="/products"
							activeClassName="underline"
							className="font-bold transition-all duration-300 ease-out hover:text-slate-900"
							exact
						>
							All Products
						</ActiveLink>
					</li>
					{navLinks.map((navLink) => {
						return (
							<li key={navLink.href}>
								<ActiveLink
									href={`${navLink.href}`}
									activeClassName="underline"
									className="font-bold transition-all duration-300 ease-out hover:text-slate-900"
									exact
								>
									{navLink.label}
								</ActiveLink>
							</li>
						);
					})}
				</ul>

				<Cart />
			</nav>
		</header>
	);
};
