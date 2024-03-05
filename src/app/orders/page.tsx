import { currentUser } from "@clerk/nextjs";

const OrdersPage = async () => {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;
	return (
		<div className="">
			<h1>Orders Page</h1>
			<p>{email}</p>
		</div>
	);
};

export default OrdersPage;
