"use client";

import { useOptimistic, useState } from "react";
import { addReviewAction } from "@/app/actions/addReviewAction";
import { ReviewsList } from "@/components/molecules/ReviewsList";

type ReviewFormType = {
	title: string;
	description: string;
	rating: number;
	author: string;
	email: string;
};

const initState: ReviewFormType = {
	title: "",
	description: "",
	rating: 0,
	author: "",
	email: "",
};

export const ReviewForm = ({
	reviews,
	productId,
}: {
	productId: string;
	reviews: {
		author: string;
		title: string;
		rating: number;
		description: string;
		email: string;
	}[];
}) => {
	const [reviewState, setReview] = useState<ReviewFormType>(initState);
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(prevState, reviewState: ReviewFormType) => [...prevState, reviewState],
	);

	return (
		<>
			<form data-testid="add-review-form" className="space-y-4">
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
						value={reviewState.title}
						placeholder="Headline"
						onChange={(e) =>
							setReview((reviewState) => ({ ...reviewState, title: e.target.value }))
						}
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
						value={reviewState.description}
						placeholder="Content"
						onChange={(e) =>
							setReview((reviewState) => ({ ...reviewState, description: e.target.value }))
						}
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
						value={reviewState.rating}
						placeholder="Rating"
						onChange={(e) =>
							setReview((reviewState) => ({ ...reviewState, rating: Number(e.target.value) }))
						}
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
						value={reviewState.author}
						placeholder="Name"
						onChange={(e) =>
							setReview((reviewState) => ({ ...reviewState, author: e.target.value }))
						}
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
						value={reviewState.email}
						placeholder="Email"
						onChange={(e) =>
							setReview((reviewState) => ({ ...reviewState, email: e.target.value }))
						}
					/>
				</div>
				<button
					formAction={async () => {
						const formData = new FormData();
						Object.entries(reviewState).forEach(([key, value]) => {
							formData.append(key, value.toString());
						});
						setOptimisticReviews(reviewState);
						await addReviewAction(formData, productId);
					}}
					type="submit"
					className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Submit Review
				</button>
			</form>
			{optimisticReviews.length}
			<ReviewsList optimisticReviews={optimisticReviews} />
		</>
	);
};
