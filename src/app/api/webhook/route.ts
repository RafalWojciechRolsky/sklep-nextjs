import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
	const json: unknown = await req.json();

	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		revalidatePath(`/product/${json.productId}`);
		revalidatePath(`/producta`);
		return NextResponse.json({ message: "OK" }, { status: 201 });
	}

	return NextResponse.json({ message: "Invalid body" }, { status: 400 });
}
export async function GET(_req: NextRequest): Promise<NextResponse> {
	return new NextResponse("Hello Next", {
		headers: {
			"Content-Type": "application/json",
		},
		status: 200,
	});
}
