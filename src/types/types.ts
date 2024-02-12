export interface Product {
	id: string;
	name: string;
	type: string;
	price: number;
	src: string;
	description: string;
}

export interface ProductResponseItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
}
