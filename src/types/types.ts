export interface ProductOnPage {
	id: string;
	name: string;
	type: string;
	price: number;
	imageSrc: string;
	description?: string;
	rating?: number | undefined;
}

export interface ProductResponseItem {
	id: string;
	name: string;
	price: number;
	categories: {
		name: string;
	}[];
	description: string;
	images: {
		url: string;
	}[];
}

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };
