//app.js
import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';
import axios from 'axios'

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import ProfilePage from '../Profile';
import ApptRequestPage from '../ApptRequest';
import ApptResponsePage from '../ApptResponse';
import BringFormsPage from '../BringForms';
import ContactPage from '../Contact';

import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  loggedIn: false,
  username: null
}

class App extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  // componentDidMount() {
  //   this.getUser()
  // }

  updateUser (userObject) {
    this.setState(userObject)
  }

  // getUser() {
  //   axios.get('/user/').then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.user.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         username: null
  //       })
  //     }
  //   })
  // }


  render() {
    return (

    // <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} render={() =>
          <SignInPage updateUser={this.updateUser} /> }
         />
        <Route path={ROUTES.SIGN_UP} render={() =>
          <SignUpPage /> }
        />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.PROFILE} component={ProfilePage} />
        <Route path={ROUTES.APPTREQUEST} component={ApptRequestPage} />
        <Route path={ROUTES.APPTRESPONSE} component={ApptResponsePage} />
        <Route path={ROUTES.BRINGFORMS} component={BringFormsPage} />
        <Route path={ROUTES.CONTACT} component={ContactPage} />
      </div>
    // </Router>
    );
    }
  };

export default App;