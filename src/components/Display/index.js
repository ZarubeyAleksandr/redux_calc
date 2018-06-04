import React from "react";

import "./index.css";

export default function Display( { value } ) {
	return (
		<div className="display">
			{value}
		</div>
	);
}