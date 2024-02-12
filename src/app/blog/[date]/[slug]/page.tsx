interface Blog {
	params: { date: string; slug: string };
	searchParams: { [key: string]: string | string[] };
}

export default async function BlogPage({ params }: Blog) {
	return (
		<div className="text-gray-900">
			<h1>
				Blog {params.date} / {params.slug}
			</h1>
		</div>
	);
}
