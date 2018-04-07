import React from 'react'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "./index.css"
const DelegateIsland = (props) => (
	<div>
	  	<h1>DELEGATE</h1>
	    <h2>{props.delegate}</h2>
	    <h3>{props.nextElection}</h3>
    <div id="buttss">
      <AwesomeButton type = "primary"  >Cast Ballot</AwesomeButton>
    </div>

    </div>
)

export default DelegateIsland
