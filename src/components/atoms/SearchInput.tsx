"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FormEvent, useState, type ChangeEvent } from "react";

export const SearchInput = () => {
	const router = useRouter();
	const [inputSearch, setInputSearch] = useState("");

	const searchSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(inputSearch);
		router.push(`/search?query=${inputSearch}`);
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
