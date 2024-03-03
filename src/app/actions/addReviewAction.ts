"use server";

import { revalidateTag } from "next/cache";
import { ReviewsProductAddByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/utils/executeGraphql";

export const addReviewAction = async (formData: FormData, productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewsProductAddByIdDocument,
		variables: {
			productId,
			author: formData.get("author") as string,
			description: formData.get("description") as string,
			email: formData.get("email") as string,
			rating: 1,
			title: formData.get("title") as string,
		},
	});

	revalidateTag("reviews");

	console.log(formData, productId, graphqlResponse.reviewCreate.id);
};
