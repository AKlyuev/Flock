import React from 'react'
import { Grid, Segment, Card} from 'semantic-ui-react'
import BalanceIsland from "./Balance.js"
import ClusterIsland from "./Cluster.js"
import DelegateIsland from "./Delegate.js"
import ClaimIsland from "./Claim.js"
import "./index.css"
const GridExampleStretched = (props) => (
  //const balance = this.props.balance;
  <div id ="cards">
  <Grid columns={3} >
    <Grid.Row stretched>
      <Grid.Column>
        <Segment><BalanceIsland balance={props.balance} duedate="May 5th"/></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment><ClusterIsland nodes="71" nodeschange = "21+" nodestimeframe="7 days" /></Segment>
      </Grid.Column>
      <Grid.Column>
      <Segment><DelegateIsland delegate="Timothy" nextElection = "30 days"  /></Segment>
        <Segment><ClaimIsland/></Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default GridExampleStretched
