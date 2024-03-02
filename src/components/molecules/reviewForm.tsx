"use client";

import { useOptimistic, useState } from "react";

type ReviewFormType = {
	headline: string;
	content: string;
	rating: number;
	name: string;
	email: string;
};

const initState: ReviewFormType = {
	headline: "",
	content: "",
	rating: 0,
	name: "",
	email: "",
};

const reviews: ReviewFormType[] = [];

export const ReviewForm = ({ productId }: { productId: string }) => {
	const [review, setReview] = useState<ReviewFormType>(initState);
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(reviews);

	return (
		<>
			<form data-testid="add-review-form" className="space-y-4" action="">
				<div>
					<label htmlFor="headline" className="block text-sm font-medium text-gray-700">
						Headline
					</label>
					<input
						type="text"
						id="headline"
						name="headline"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						value={review.headline}
						placeholder="Headline"
					/>
				</div>
				<div>
					<label htmlFor="content" className="block text-sm font-medium text-gray-700">
						Content
					</label>
					<textarea
						id="content"
						name="content"
						rows={4}
						required
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						value={review.content}
						placeholder="Content"
					></textarea>
				</div>
				<div>
					<label htmlFor="rating" className="block text-sm font-medium text-gray-700">
						Rating
					</label>
					<input
						type="number"
						id="rating"
						name="rating"
						min="1"
						max="5"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						value={review.rating}
						placeholder="Rating"
					/>
				</div>
				<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-700">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						value={review.name}
						placeholder="Name"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						value={review.email}
						placeholder="Email"
					/>
				</div>
				<button
					type="submit"
					className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Submit Review
				</button>
			</form>
			{optimisticReviews.map((optimisticReview) => {
				return (
					<div
						key={optimisticReview.headline}
						className="mb-4 overflow-hidden bg-white shadow sm:rounded-lg"
					>
						<div className="px-4 py-5 sm:px-6">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								{optimisticReview.headline}
							</h3>
							<p className="mt-1 max-w-2xl text-sm text-gray-500">{optimisticReview.content}</p>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Rating</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
										{optimisticReview.rating}
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Name</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
										{optimisticReview.name}
									</dd>
								</div>
								<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Email</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
										{optimisticReview.email}
									</dd>
								</div>
							</dl>
						</div>
					</div>
				);
			})}
		</>
	);
};
