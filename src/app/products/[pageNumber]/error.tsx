"use client";

const ErrorPage = ({
	error,
	_reset,
}: {
	error: Error & { digest: string };
	_reset: () => void;
}) => {
	return (
		<div className="">
			<h1>Error</h1>
			<p>{error.digest}</p>
		</div>
	);
};

export default ErrorPage;
