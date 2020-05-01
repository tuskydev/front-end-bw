import React from "react"
import { Route } from "react-router-dom"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import PrivateRoute from "./components/ProtectedRoute"
import IssuesPage from "./components/IssuesPage"
import SignUpNavBar from "./components/SignUpNavBar";
import UserPage from "./components/UserPage";
import UsersIssuesPage from './components/UsersIssuesPage'

const App = () => {
  return (
      
    <div className="App">
      <SignUpNavBar />
      <Route exact path="/" component={SignUpForm}/>
      <Route exact path="/login" component={LoginForm}/>
      <PrivateRoute path="/your-posts" component={UsersIssuesPage}/>
      <PrivateRoute exact path="/issues" component={IssuesPage}/>
      <PrivateRoute path="/profile" component={UserPage} />
    </div>
  );
};
export default App;