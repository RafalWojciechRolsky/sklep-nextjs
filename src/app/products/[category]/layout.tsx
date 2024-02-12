import { type ReactNode } from 'react';

export const generateStaticParams = async () => {
	return [{ category: 'category1' }, { category: 'category2' }];
};

const CategoryProductLayout = ({ children }: { children: ReactNode }) => {
	return children;
};

export default CategoryProductLayout;
