import React, { Component } from "react";
import "./index.css";
import CalculatorButton from "./CalculatorButton";
import Display from "./Display";


class Calculator extends Component {  
	render() {
	  const { value, btns, addElem, clear, equal } = this.props;
	  return (
		<main className="calculator">
		  <Display value={ value } />
		  <div className="buttons-container">
			{btns.map((item, key) => {
			  if(item === "C"){
				return(
				  	<CalculatorButton 
					  	backgroundColor="#A52A2A" 
					  	action={ clear.bind(this) } 
					  	key={key} 
					  	value = {item} 
					/>
				)
			  } else if(item === "="){
				return(
					<CalculatorButton 
						backgroundColor="#f5923e" 
						action={ equal.bind(this, value) } 
						key={key} 
						value = {item} 
					/>
				)
			  } else {
				if (item === '*' || item === '/' || item === '-' || item === '+')
				return(
					<CalculatorButton 
						backgroundColor="#9ACD32" 
						action={ addElem.bind(this, item) } 
						key={key} 
						value = {item} 
					/>
				)
				else return (
					<CalculatorButton 
						backgroundColor="#f556B2F" 
						action={ addElem.bind(this, item) } 
						key={key} 
						value = {item} 
					/>
				)
			  }
			})}
		  </div>
		</main>
	  );
	}
  }

export default Calculator;
