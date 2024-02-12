'use client';

// import { useParams, usePathname, useRouter, useSearchParams, useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import { useState, type FC } from 'react';

interface IPropsTypes {
	name?: string;
}

export const ProductCounter: FC<IPropsTypes> = (_props) => {
	const [counter, setCounter] = useState(0);

	// useRouter()
	// useParams();
	// usePathname()
	// useSearchParams()
	// useSelectedLayoutSegment()
	// useSelectedLayoutSegments()

	return (
		<div className="text-gray-900">
			<button
				type="button"
				onClick={() => setCounter((counter) => counter + 1)}
				className="bg-slate-600 px-6 py-2 text-gray-50"
			>
				+
			</button>
			<input readOnly value={counter} />
			<button
				type="button"
				onClick={() => setCounter((counter) => counter - 1)}
				className="bg-slate-600 px-6 py-2 text-gray-50"
			>
				-
			</button>
		</div>
	);
};
