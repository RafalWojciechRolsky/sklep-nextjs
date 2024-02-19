import { type FC } from "react";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { executeGraphql } from "@/utils/executeGraphql";
import { CategoriesDocument } from "@/gql/graphql";

interface IPropsTypes {
	name?: string;
}

export const Header: FC<IPropsTypes> = async (_props) => {
	const graphqlResponse = await executeGraphql(CategoriesDocument, {});

	const categories = graphqlResponse.categories.data;
	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/products", label: "All products" },
		...categories.map((category) => {
			return {
				href: `/products/${category.slug}`,
				label: category.name,
			};
		}),
	];

	return (
		<header className="mx-auto max-w-2xl  bg-gray-100 px-4 py-6 text-gray-900 sm:px-6 lg:max-w-7xl lg:px-8">
			<nav>
				<ul className="flex justify-center gap-4">
					{navLinks.map((navLink) => {
						return (
							<li key={navLink.href}>
								<ActiveLink
									href={`${navLink.href}`}
									activeClassName="underline"
									className="font-bold text-blue-400 hover:text-blue-600"
								>
									{navLink.label}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
