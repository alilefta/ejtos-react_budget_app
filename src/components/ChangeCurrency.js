import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from "react-bootstrap/Dropdown";
const ChangeCurrency = () => {
	const { dispatch, currency } = useContext(AppContext);
	const [currentCurrency, setCurrentCurrency] = useState(currency);
	useEffect(() => {
		dispatch({
			type: "CHG_CURRENCY",
			payload: currentCurrency,
		});
	}, [currentCurrency]);

	const showCurrentCurrency = () => {
		if (currentCurrency === "$") {
			return "$ Dollar";
		}
		if (currentCurrency === "£") {
			return "£ Pound";
		}
		if (currentCurrency === "€") {
			return "€ Euro";
		}
		if (currentCurrency === "₹") {
			return "₹ Ruppee";
		}
	};

	return (
		<Dropdown>
			<Dropdown.Toggle variant="success" id="my-dropdown-button">
				Currency: ({showCurrentCurrency()})
			</Dropdown.Toggle>

			<Dropdown.Menu id="my-dropdown-menu">
				<Dropdown.Item onClick={() => setCurrentCurrency("$")}>
					$ Dollar
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setCurrentCurrency("£")}>
					£ Pound
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setCurrentCurrency("€")}>
					€ Euro
				</Dropdown.Item>
				<Dropdown.Item onClick={() => setCurrentCurrency("₹")}>
					₹ Ruppee
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default ChangeCurrency;
