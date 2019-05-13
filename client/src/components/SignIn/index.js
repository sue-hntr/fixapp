//SignIn.js
import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// import axios from 'axios'

import usersAPI from "../../utils/usersAPI";


import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  redirect: false,
};

const SignInPage = () => (
  <div>
    <h1>SignIn Do Not Use this page to sign in YET. Still developing sessions</h1>
    <SignInForm />
  </div>
);

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    console.log('on submit');
// use axios instead of userAPI to avoid route issues?
//that didn't work 500 file not found. So Add user signin to usersAPI
//and logic to controller
//if not work, I will use userAPI, add the /user/signin route
//also add the updateUser to App.js at first
usersAPI.saveUserSignIn({
      email: this.state.email,
      password: this.state.password
  })
  .then(response => {
      console.log('signin response: ')
      console.log(response)
      if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
              loggedIn: true,
              username: response.data.username
          })
          // update the state to redirect to home
          this.setState({
              redirectTo: '/'
          })
      }
  }).catch(error => {
      console.log('signin error: ')
      console.log(error);
      
  })
}
// try this if MERN NOT WORK Create a new API for users/signin
  //   usersSigninAPI.saveUser({
  //     email: this.state.email,
  //     password: this.state.password
  //   })
  // .then(res =>
  //     this.setState({ redirect: true }))
  // .catch(err => console.log(err));
  //   }
  // }















  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      email,
      password,
      error,
      message
    } = this.state;
// VALIDATION
    const isInvalid =
      password === '' || email === '' ;
    // if (isInvalid){
    //   this.setState({ message: "All fields must be filled"})
    // }
    const { redirect } = this.state;
    if (redirect){
      return <Redirect to='/profile' />
    }
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        <br />
        {message}
        <br />
        {error && <p>{error.message}</p>}

      </form>
    );
  }
}

const SignInLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);

export default SignInPage;

export { SignInForm, SignInLink };