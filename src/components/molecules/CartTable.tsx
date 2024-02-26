import { type FC } from "react";

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
	return (
		<table className="table-fixed">
			<thead>
				<tr>
					<th className="px-4">Nazwa produktu</th>
					<th className="px-4 text-center">Ilość</th>
					<th className="px-4">Cena</th>
					<th className="px-4">Suma</th>
				</tr>
			</thead>
			<tbody>
				{products.map(({ product, quantity }) => (
					<tr key={product.id}>
						<td>{product.name}</td>
						<td>{quantity}</td>
						<td>{product.price}</td>
						<td>{product.price * quantity}</td>
					</tr>
				))}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan={3}>Wartość koszyka</td>
					<td>
						{products.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0)}
					</td>
				</tr>
			</tfoot>
		</table>
	);
};
