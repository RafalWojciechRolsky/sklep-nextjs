import { ActiveLink } from "@/components/atoms/ActiveLink";
import { executeGraphql } from "@/utils/executeGraphql";
import { CategoriesDocument } from "@/gql/graphql";
import { Cart } from "@/components/molecules/Cart";

export const Header = async () => {
	const graphqlResponse = await executeGraphql(CategoriesDocument, {});

	const categories = graphqlResponse.categories.data;
	const navLinks = [
		{ href: "/", label: "Home", exact: true },
		{ href: "/products", label: "All", exact: true },
		{ href: "/collections", label: "Collections", exact: true },
		{ href: "/random", label: "Random", exact: true },
		...categories.map((category) => {
			return {
				href: `/categories/${category.slug}`,
				label: category.name,
				exact: true,
			};
		}),
	];

	return (
		<header className="mx-auto max-w-2xl  bg-gray-100 px-4 py-6 text-slate-600  sm:px-6 lg:max-w-7xl lg:px-8">
			<nav className="flex flex-row justify-between">
				<ul className="flex justify-center" aria-label="pagination">
					{navLinks.map((navLink) => {
						return (
							<li key={navLink.href}>
								<ActiveLink
									href={{ pathname: `${navLink.href}` }}
									activeClassName="border-b-4 border-b-slate-600 pb-6 pt-7 bg-slate-300"
									className="px-2 font-bold transition-all duration-300 ease-out hover:text-slate-900 "
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
