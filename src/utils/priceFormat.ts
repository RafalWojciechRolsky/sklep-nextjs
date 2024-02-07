export const priceFormat = (price: number, locale: string, currency: string) => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency,
	}).format(price);
};
