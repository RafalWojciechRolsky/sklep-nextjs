import { executeGraphql } from "@/utils/executeGraphql";
import { CollectionsDocument } from "@/gql/graphql";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const CollectionsPage = async () => {
	const graphqlResponseCollections = await executeGraphql(CollectionsDocument, {});
	const collections = graphqlResponseCollections.collections.data;

	return (
		<section className="px-20">
			<h1 className="mb-10 text-center text-3xl font-semibold text-slate-900">Collections Page</h1>
			<div className={`grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8`}>
				{collections.map((collection) => {
					return (
						<ActiveLink
							href={`/collections/${collection.slug}`}
							key={collection.id}
							className="flex h-32 items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 ease-out hover:bg-gray-300"
							exact={false}
						>
							<h2>{collection.name}</h2>
						</ActiveLink>
					);
				})}
			</div>
		</section>
	);
};

export default CollectionsPage;