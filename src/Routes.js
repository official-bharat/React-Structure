import React from 'react';
import Home from './Home/home.jsx';
import Login from './Login/login.jsx';
import Signup from './Signup/signup.jsx';
import { Switch, Route } from 'react-router';
import Header from './Common/header.jsx';
import Footer from './Common/footer.jsx';


const Routes = () => (
  <main>
    <Header />
	    <Switch>
	      <Route exact path='/' component={Home}/>
	      <Route exact path='/login' component={Login}/>
	      <Route exact path='/sign-up' component={Signup}/>
	    </Switch>
    <Footer /> 
  </main>
)

export default Routes;
