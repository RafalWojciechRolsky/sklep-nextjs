export interface Product {
	id: string;
	name: string;
	type: string;
	price: number;
	imageSrc: string;
	description: string;
	longDescription: string;
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
