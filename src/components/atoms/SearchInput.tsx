"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useState, type ChangeEvent, useEffect } from "react";
import { useDebounce } from "@/utils/hooks/useDebounce";

export const SearchInput = () => {
	const router = useRouter();
	const [inputSearch, setInputSearch] = useState("");

	const debouncedSearch = useDebounce(inputSearch, 1500);

	useEffect(() => {
		if (debouncedSearch) {
			router.push(`/search?query=${debouncedSearch}`);
			setInputSearch("");
		}
	}, [router, debouncedSearch]);

	const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputSearch) {
			router.push(`/search?query=${inputSearch}`);
			setInputSearch("");
		}
		setInputSearch("");
	};

	const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setInputSearch(e.target.value);

	return (
		<form className="flex flex-row items-center" onSubmit={searchSubmitHandler}>
			<input
				type="search"
				placeholder="Search"
				className="py-1 pl-2 outline-none"
				value={inputSearch}
				onChange={searchChangeHandler}
			/>
			<Search className="-translate-x-7" />
			<label htmlFor=""></label>
		</form>
	);
};
