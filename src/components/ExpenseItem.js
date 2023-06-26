import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete, TiMinus, TiPlus } from "react-icons/ti";
const ExpenseItem = (props) => {
	const { dispatch, currency } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: "DELETE_EXPENSE",
			payload: props.id,
		});
	};

	const increaseAllocation = (name) => {
		const expense = {
			name,
			cost: 10,
		};
		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});
	};
	const decreaseAllocation = (name) => {
		const expense = {
			name,
			cost: 10,
		};
		dispatch({
			type: "RED_EXPENSE",
			payload: expense,
		});
	};

	const btnStyles = {
		color: "#fff",
		borderRadius: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: "none",
		margin: "0 auto",
		padding: "0",
	};
	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{currency}
				{props.cost}
			</td>
			<td>
				<button
					onClick={(event) => increaseAllocation(props.name)}
					style={{ backgroundColor: "#3ec63e", ...btnStyles }}
				>
					<TiPlus size={40}></TiPlus>
				</button>
			</td>
			<td>
				<button
					onClick={(event) => decreaseAllocation(props.name)}
					style={{ backgroundColor: "#9d0404", ...btnStyles }}
				>
					<TiMinus size={40}></TiMinus>
				</button>
			</td>
			<td>
				<TiDelete
					size={"1.4em"}
					onClick={handleDeleteExpense}
					style={{
						cursor: "pointer",
						marginTop: "0.5rem",
					}}
				></TiDelete>
			</td>
		</tr>
	);
};
export default ExpenseItem;
