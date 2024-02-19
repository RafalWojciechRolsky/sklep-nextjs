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

	return (
		<header className="mx-auto max-w-2xl  bg-gray-100 px-4 py-6 text-gray-900 sm:px-6 lg:max-w-7xl lg:px-8">
			<nav>
				<ul className="flex justify-center gap-4">
					<li>
						<ActiveLink
							href="/"
							activeClassName="underline"
							className="font-bold text-blue-400 hover:text-blue-600"
						>
							Home
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							href="/products"
							activeClassName="underline"
							className="font-bold text-blue-400 hover:text-blue-600"
						>
							All products
						</ActiveLink>
					</li>
					{categories.map((category) => {
						return (
							<li key={category.id}>
								<ActiveLink
									href={`/products/${category.slug}`}
									activeClassName="underline"
									className="font-bold text-blue-400 hover:text-blue-600"
								>
									{category.name}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
