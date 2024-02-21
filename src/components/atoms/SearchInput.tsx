import { Search } from "lucide-react";

export const SearchInput = () => {
	return (
		<section className="flex flex-row items-center">
			<input type="search" placeholder="Search" className="py-1 pl-2 outline-none" />
			<Search className="-translate-x-7" />
		</section>
	);
};
