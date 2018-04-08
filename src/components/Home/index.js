import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import {Label} from 'semantic-ui-react'
import matthew from "../../assets/images/matthew.png"
import GridExampleStretched from "./cards.js"
import {Card} from 'semantic-ui-react'
import TestButton from "./testbutton.js"
import BalanceIsland from "./Balance.js"
import ClaimIsland from "./Claim.js"
import DelegateIsland from "./Delegate.js"
import NameBubble from "./NameBubble.js"
import { Button } from 'semantic-ui-react'
import { auth } from '../../firebase'
import {firebase} from "../../firebase"


import background from "../../assets/images/background.png"
import logo1 from  "../../assets/images/logo2.png"

{/*
var user = auth.doCurrentUsername;
var user = $firebaseAuth().$getAuth();
console.log(user);
if (user) {
  var name = user.username;
  console.log(name);
}
*/}



var backgroundStyle = {
  width: "100%" ,
  height: "900px",
  backgroundImage: `url(${background})`,
  margin: "0px",
};

var sectionStyle = {
  margin: "10px",
  padding:"0",
}

var buttonStyle = {
  marginTop: "0px",
  backgroundColor: "#33e0a3"
}

var titleStyle =  {
  paddingTop: "100px",
}

var gridStyle = {
  marginTop: "-50px",
}


var logoStyle = {
  height:"100px",
}

var buttonStyle = {
  marginTop: "30px"
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );
  }

  render() {
    const { users } = this.state;

    return (
      <div style = {backgroundStyle}>
        <div style = {sectionStyle}>
          <div className="ui grid">
            
              <div className = "four wide column">
                <img src = {logo1} style = {logoStyle}/>
              </div>
              <div className = "right floated four wide column">
                
                <Button style = {buttonStyle} content = "Arsen Klyuev" icon='user' labelPosition='right' />
              
            </div>
        </div>

        {/*
        <form onSubmit={this.onSubmit}>
          <input
            value={username}
            onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
            type="text"
            placeholder="Full Name"
          />
        </form>
        */}

        <GridExampleStretched style = {gridStyle} balance = "$47.89" dueindays = "23" nodes = "71" nodeschange = "21+" nodestimeframe="7 days" delegate="Timothy" nextElection = "30 days"/>
        </div>
      </div>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
