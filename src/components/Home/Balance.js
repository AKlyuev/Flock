import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "./index.css"

var buttonStyle = {
  marginTop: "-10px",
  width: "240px",
}

var divStyle = {
	backgroundColor: "#51B3AC",
	width: "330px",
	height:"70px",
	borderRadius:"5px",
}

var balanceValueStyle = {
	paddingTop: "20px",
	fontSize: "70px",
	marginBottom: "70px",
	paddingBottom:"70px"
}

var h1style = {
	fontWeight: "100"
}

var divStyle3 = {
	paddingTop: "70px",

}
const BalanceIsland = (props) => (
	<div >
	  	<h1 style = {h1style}>MY BALANCE</h1>
	  	<div style = {divStyle}><h1 style = {balanceValueStyle}>{props.balance}</h1></div>
	    <div style = {divStyle3}>
	    <h3 >Due in <strong>{props.dueindays}</strong> days</h3>
			<br/>
		</div>

		<div id="butts">
			<div className = "ui center aligned grid">
				<div className = "twelve wide column">
			    <button className="ui teal button" style = {buttonStyle}>Make Payment</button>
			    </div>
			    <div className = " twelve wide column">
			    <button className="ui teal button" style = {buttonStyle}>Request Grace</button>
			    </div>
			</div>
		</div>
		</div>


)

export default BalanceIsland
