//app.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

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

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
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
  </Router>
);

export default App;