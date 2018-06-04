import React from "react";
import "./index.css";

export default function CalculatorButton( { backgroundColor, color, value, action} ) {
	return (
		<button
			className={ `calculator-button` }
			style={ { backgroundColor, color } }
			onClick={  action  }
		>
			{ value }
		</button>
	);
}