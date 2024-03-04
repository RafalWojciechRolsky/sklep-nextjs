import { ChevronLeft, ChevronRight } from "lucide-react";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

interface IPropsTypes {
	take: number;
	order: SortDirection;
	orderBy: ProductSortBy;
	totalProducts: number;
	path: string;
	currentPage: number;
}

export const Pagination = ({
	totalProducts,
	take,
	path,
	currentPage,
	order,
	orderBy,
}: IPropsTypes) => {
	const totalPages = Math.ceil(totalProducts / take);

	if (totalPages > 1) {
		return (
			<div className="my-4 flex flex-row items-center justify-center gap-3" aria-label="pagination">
				{currentPage > 1 && (
					<ActiveLink
						href={{
							pathname: `/${path}/${currentPage - 1}`,
							query: { take, order, orderBy },
						}}
						shallow={true}
						className="rounded-sm bg-slate-300 px-4 py-2"
					>
						<ChevronLeft size={36} />
					</ActiveLink>
				)}
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<ActiveLink
						href={{
							pathname: `/${path}/${page}`,
							query: { take, order, orderBy },
						}}
						shallow={true}
						key={page}
						className={`rounded-sm px-4 py-2 ${currentPage === page ? "bg-slate-500" : "bg-slate-300"}`}
					>
						{page}
					</ActiveLink>
				))}
				{currentPage < totalPages && (
					<ActiveLink
						href={{
							pathname: `/${path}/${currentPage + 1}`,
							query: { take, order, orderBy },
						}}
						shallow={true}
						className="rounded-sm bg-slate-300 px-4 py-2"
					>
						<ChevronRight size={36} />
					</ActiveLink>
				)}
			</div>
		);
	} else {
		return;
	}
};
