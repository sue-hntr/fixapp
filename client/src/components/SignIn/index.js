//SignUp.js
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import usersAPI from "../../utils/usersAPI";


import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  user:[],
  email: '',
  password: '',
  error: null,
  message:'',
  redirect: false,
};



const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
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
    console.log(this.state.firstname);
    if (this.state.password === this.state.confirmpassword){
    usersAPI.saveUser({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    })
  .then(res =>
      this.setState({ redirect: true }))
  .catch(err => console.log(err));
    }
  }

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