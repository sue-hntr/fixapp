//SignUp.js
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import usersAPI from "../../utils/usersAPI";


import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  user:[],
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmpassword: '',
  error: null,
  message:'',
  redirect: false,
};



const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

class SignUpForm extends Component {
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
      this.setState({ user: res.data}))
  .catch(err => console.log(err));
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
      error,
      message
    } = this.state;
// VALIDATION
    const isInvalid =
      password !== confirmpassword ||
      password === '' ||
      email === '' ||
      lastname === '' ||
      firstname === '';
    // if (isInvalid){
    //   this.setState({ message: "All fields must be filled"})
    // }

    return (
      <form onSubmit={this.onSubmit}>
      <input
          name="firstname"
          value={firstname}
          onChange={this.onChange}
          type="text"
          placeholder="First Name"
        />
        <input
          name="lastname"
          value={lastname}
          onChange={this.onChange}
          type="text"
          placeholder="Last Name"
        />
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
        <input
          name="confirmpassword"
          value={confirmpassword}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>
        <br />
        {message}
        <br />
        {error && <p>{error.message}</p>}

      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };