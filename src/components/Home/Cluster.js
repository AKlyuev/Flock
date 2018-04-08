import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

var buttonStyle = {
  marginTop: "-10px",
  width: "240px",
}

var divStyle = {
	backgroundColor: "#4282CB",
	width: "330px",
	height:"70px",
	borderRadius:"5px",
}

var nodesValueStyle = {
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



const ClusterIsland = (props) => (
	<div>
	  	<h1 style = {h1style}>MY FLOCK</h1>
	  	<div style = {divStyle}><h1 style = {nodesValueStyle}>{props.nodes} people</h1></div>
	  	<div style = {divStyle3}>
	    <h3>{props.nodeschange} people <span style = {inDaysStyle}>in {props.nodestimeframe}</span></h3>
	    <br/>
	    </div>
	    <div id = "butts">
			<div className = "ui center aligned grid">
				<div className = "twelve wide column">
			    	<button className="ui blue button" style = {buttonStyle}>View Flock Details</button>
			    </div>
			    <div className = " twelve wide column">
			    	<button className="ui blue button" style = {buttonStyle}>View History</button>
			    </div>
			</div>
		</div>
    </div>
  

)

export default ClusterIsland
