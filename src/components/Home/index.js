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

import background from "../../assets/images/background.png"


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
        <h1>Home</h1>

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

        <Label image={matthew}/>
        <GridExampleStretched/>
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
