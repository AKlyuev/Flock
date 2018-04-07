import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import Card from 'semantic-ui-react'
//import './signin.css'
import ImageExampleImage from './matthew.js'
import matthew from "../../assets/images/matthew.png"
import background from "../../assets/images/background.png"

var sectionStyle = {
  width: "100%" ,
  height: "900px",
  backgroundImage: `url(${background})`
};

const SignInPage = ({ history }) =>
  <div style = { sectionStyle }>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <div> 
      <div className="ui middle aligned center aligned page grid">
       <div className="column">
        <div className = "ui middle aligned centered card">
        <div className = "image">
          <img src={matthew} alt={"matthew"}/>
        </div>
        <h1>Sign In</h1>
        
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
        </div>
        </div>
      </div>
    </div>
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} className = "ui middle aligned form">
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button class = "ui button" disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};