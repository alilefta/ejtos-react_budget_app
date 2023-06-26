import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
	const { budget, expenses, dispatch, currency } = useContext(AppContext);
	const [currentBudget, setCurrentBudget] = useState(budget);
	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	useEffect(() => {
		dispatch({
			type: "SET_BUDGET",
			payload: currentBudget,
		});
	}, [currentBudget]);

	const handleChangeBudget = (value) => {
		if (!isNaN(value)) {
			if (parseInt(value) > totalExpenses) {
				if (parseInt(value) < 20000) {
					setCurrentBudget(value);
				} else {
					alert("The budget upper limit is 20,000");
					return;
				}
			} else {
				alert("The budget should not be lower than the spending");
				return;
			}
		}
	};
	return (
		<div className="alert alert-secondary">
			<span>Budget: {currency} </span>
			<input
				type="number"
				step={10}
				value={currentBudget}
				onChange={(e) => handleChangeBudget(e.target.value)}
			/>
		</div>
	);
};

export default Budget;
