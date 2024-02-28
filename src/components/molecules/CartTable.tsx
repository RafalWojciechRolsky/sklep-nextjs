import { type FC } from "react";
import { cookies } from "next/headers";
import { IncremenetProductQuantity } from "@/components/atoms/IncremenetProductQuantity";
import { RemoveButton } from "@/components/atoms/RemoveButton";

interface IPropsTypes {
	products: {
		quantity: number;
		product: {
			id: string;
			name: string;
			price: number;
		};
	}[];
}

export const CartTable: FC<IPropsTypes> = ({ products }) => {
	const cartId = cookies().get("cartId")?.value as string;
	return (
		<table className="table-fixed">
			<thead>
				<tr>
					<th className="px-4">Nazwa produktu</th>
					<th className="px-4 text-center">Ilość</th>
					<th className="px-4 text-center">Dodaj</th>
					<th className="px-4">Cena</th>
					<th className="px-4">Suma</th>
				</tr>
			</thead>
			<tbody>
				{products.map(({ product, quantity }) => (
					<tr key={product.id}>
						<td className="px-4">{product.name}</td>
						<IncremenetProductQuantity quantity={quantity} productId={product.id} cartId={cartId} />
						<td className="px-4">{product.price}</td>
						<td className="px-4">{product.price * quantity}</td>
						<td className="px-4">
							<RemoveButton cartId={cartId} productId={product.id} />
						</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan={4} className="px-4">
						Wartość koszyka
					</td>
					<td className="px-4">
						{products.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0)}
					</td>
				</tr>
			</tfoot>
		</table>
	);
};
