export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === 'category1') {
		return [{ pageNumber: '1' }, { pageNumber: '2' }];
	} else if (params.category === 'category2') {
		return [{ pageNumber: '1' }];
	}

	return [];
};

const CategoryProductPage = ({
	params: { category, pageNumber },
}: { params: { category: string; pageNumber: string } }) => {
	return (
		<div className="">
			<h1>
				Produkty z kategorii {category} ze stony {pageNumber}
			</h1>
		</div>
	);
};

export default CategoryProductPage;
