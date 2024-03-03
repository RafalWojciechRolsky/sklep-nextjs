"use client";

import { Suspense } from "react";
import { ReviewDetail } from "@/components/atoms/ReviewDetail";

export const ReviewsList = ({
	optimisticReviews,
}: {
	optimisticReviews: {
		author: string;
		title: string;
		rating: number;
		description: string;
		email: string;
	}[];
}) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			{optimisticReviews.map((review, i) => {
				return <ReviewDetail key={`${review.author}-${i}`} review={review} />;
			})}
		</Suspense>
	);
};
