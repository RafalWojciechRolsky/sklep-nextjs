import { notFound } from 'next/navigation';
import { type ComponentType } from 'react';

const Page = async ({ params }: { params: { filename: string } }) => {
	const Page = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);
	return (
		<article className="prose prose-lg">
			<Page />
		</article>
	);
};

export default Page;
