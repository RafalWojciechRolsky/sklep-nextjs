import Link from "next/link";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { executeGraphql } from "@/utils/executeGraphql";
import { CategoriesDocument, CollectionsGetAllDocument } from "@/gql/graphql";
import { getProductsFromCart } from "@/utils/getProductsFromCart";
import { SearchInput } from "@/components/atoms/SearchInput";
import { CartInHeader } from "@/components/molecules/CartInHeader";

export const Header = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoriesDocument, variables: {} });
	const graphqlResponseCollections = await executeGraphql({
		query: CollectionsGetAllDocument,
		variables: {},
	});
	const products = await getProductsFromCart();

	const collections = graphqlResponseCollections.collections.data;
	const categories = graphqlResponse.categories.data;
	let quantity: number;

	if (products) {
		quantity = products.reduce((acc, product) => acc + product.quantity, 0);
	} else {
		quantity = 0;
	}

	const navLinks = [
		{ href: "/", label: "Home", exact: true },
		{ href: "/products", label: "All", exact: true },
		{ href: "/random", label: "Random", exact: true },
		...collections.map((collection) => {
			return {
				href: `/collections/${collection.slug}`,
				label: collection.name,
				exact: true,
			};
		}),
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
			<nav className="flex flex-row items-center justify-between">
				<ul className="flex justify-center" aria-label="pagination">
					{navLinks.map((navLink) => {
						return (
							<li key={navLink.href}>
								<ActiveLink
									href={{
										pathname: `${navLink.href}`,
										query: { order: "ASC", orderBy: "DEFAULT", take: 8 },
									}}
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
				<SearchInput />
				<Link href={"/cart"}>
					<CartInHeader quantity={quantity} />
				</Link>
			</nav>
		</header>
	);
};
