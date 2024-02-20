interface Item {
	id: string;
}

export const getRandomElements = (arr: Item[], num: number): Item[] => {
	const arrCopy = [...arr];
	const result: Item[] = [];

	for (let i = 0; i < num; i++) {
		const randomIndex = Math.floor(Math.random() * arrCopy.length);
		result.push(arrCopy.splice(randomIndex, 1)[0] as Item);
	}

	return result;
};
