"use client";

export const RemoveButton = () => {
	return (
		<button
			className="text-red-500"
			onClick={() => {
				console.log("Remove");
			}}
		>
			Remove
		</button>
	);
};
