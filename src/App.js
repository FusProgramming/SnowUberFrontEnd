import React from 'react';
import Axios from 'axios';
import NavigationHome from './navigation/NavigationHome';
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import UserHomePage from "./pages/UserHomePage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




class App extends React.Component {

  render() {
    return (
        <Router>
          <div>
            <Switch>

              <Route path="/UserHomePage">
                <UserHomePage/>
              </Route>
              <Route path="/RegistrationPage">
                <RegistrationPage/>
              </Route>
              <Route path="/ForgotPasswordPage">
                <ForgotPasswordPage/>
              </Route>
              <Route path="/LoginPage">
                <LoginPage/>
              </Route>
              <Route path="/">
                <NavigationHome/>
                <HomePage/>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
