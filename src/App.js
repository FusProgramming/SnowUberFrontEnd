import React, {useEffect, useState} from 'react';
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
import NavigationUserHome from "./navigation/NavigationUserHome";
import UserMessagesPage from "./pages/UserMessagesPage";
import UserNotificationPage from "./pages/UserNotificationPage";
import SettingsPage from "./pages/SettingsPage";
import UserTransactionsPage from "./pages/UserTransactionsPage";
import UserPlowPage from "./pages/UserPlowPage";
import ContractorHomePage from "./pages/ContractorHomePage";
import ContractorMessagePage from "./pages/ContractorMessagePage";
import ContractorTransactionsPage from "./pages/ContractorTransactionsPage";
import NavigationContractorHome from "./navigation/NavigationContractorHome";
import Redirect from "react-router-dom/es/Redirect";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const setAuth = boolean => {
        setIsAuthenticated(boolean);
    };
    return (
        <Router>
          <div>
            <Switch>
                <Route path="/ContractorTransactionPage">
                    <NavigationContractorHome/>
                    <ContractorTransactionsPage/>
                </Route>
                <Route path="/ContractorMessagePage">
                    <NavigationContractorHome/>
                    <ContractorMessagePage/>
                </Route>
                <Route path="/ContractorHomePage">
                    <NavigationContractorHome/>
                    <ContractorHomePage/>
                </Route>
                <Route path="/UserPlowPage">
                    <NavigationUserHome/>
                    <UserPlowPage/>
                </Route>
                <Route path="/UserTransactionsPage">
                    <NavigationUserHome/>
                    <UserTransactionsPage/>
                </Route>
                <Route path="/SettingsPage">
                    <NavigationUserHome/>
                    <SettingsPage/>
                </Route>
                <Route path="/UserNotificationPage">
                    <NavigationUserHome/>
                    <UserNotificationPage/>
                </Route>
                <Route path="/UserMessagesPage">
                    <NavigationUserHome/>
                    <UserMessagesPage/>
                </Route>
                <Route path="/UserHomePage">
                    <NavigationUserHome/>
                    <UserHomePage/>
                </Route>
                <Route path="/RegistrationPage" render={props => !isAuthenticated ? ( <RegistrationPage {...props} setAuth={setAuth} /> ) : ( <Redirect to="/UserHomePage"/> ) }/>
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

export default App;
