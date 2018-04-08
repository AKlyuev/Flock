import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "./index.css"

var buttonStyle = {
  marginTop: "-10px",
  width: "240px",
}

var divStyle = {
	height: "50px",
	width: "50px",
	backgroundColor: "#51B3AC",
	borderRadius: "25px"
}


var dotStyle = {
	height: "75px",
  	width: "75px",
 	backgroundColor: "#51B3AC",
  	borderRadius: "50%",
  	display: "inline-block",
  	marginTop: "-20px",
  	marginRight: "-20px"
}

var h1style = {
	fontWeight: "100"
}
const DelegateIsland = (props) => (
	<div>
	<div className = "ui center aligned grid">
		<span className = "ui column" style = {dotStyle}>
		</span>
		<div className = "ui twelve wide column">
	  		<h1 style = {h1style}> MY DELEGATE</h1>
	  	</div>
	</div>
	    <h2>{props.delegate}</h2>
	    <h3> Next election in {props.nextElection}</h3>
    <div id="buttss">
      <div className = "ui center aligned grid">
				<div className = "twelve wide column">
			    	<button className="ui teal button" style = {buttonStyle}>Cast Ballot</button>
			    </div>
			</div>
    </div>

    </div>
)

export default DelegateIsland
