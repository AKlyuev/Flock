import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "./index.css"

const BalanceIsland = (props) => (
	<div>
	  	<h1>BALANCE</h1>
	    <h1>{props.balance}</h1>
	    <h3>{props.duedate}</h3>
			<br/>


			<div id="butts">
	    <AwesomeButton type = "primary">Make payment</AwesomeButton>
			<text> </text>
	    <AwesomeButton type = "primary">Request Grace</AwesomeButton>
			</div>
		</div>


)

export default BalanceIsland
