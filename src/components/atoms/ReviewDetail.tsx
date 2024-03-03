export const ReviewDetail = ({
	review,
}: {
	review: {
		author: string;
		rating: number;
		email: string;
		description: string;
		title: string;
	};
}) => {
	return (
		<div className="mb-4 overflow-hidden bg-white shadow sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg font-medium leading-6 text-gray-900">{review.title}</h3>
				<p className="mt-1 max-w-2xl text-sm text-gray-500">{review.description}</p>
			</div>
			<div className="border-t border-gray-200">
				<dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Rating</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{review.rating}</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Name</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{review.author}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Email</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{review.email}</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};
