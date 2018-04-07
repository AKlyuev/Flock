import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
const ClusterIsland = (props) => (
	<div>
  	<h1>CLUSTER</h1>
    <h2>{props.nodes} Nodes</h2>
    <h3>{props.nodeschange} in {props.nodestimeframe}</h3>
		<div id="butts">
		<AwesomeButton type = "primary">Flock Details</AwesomeButton>
		<text> </text>
		<AwesomeButton type = "primary">View History</AwesomeButton>
    </div>
  </div>

)

export default ClusterIsland
