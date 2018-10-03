import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import NavBar from './menu/NavBar.js'
class App extends Component {
  render() {
    return (
    	<div className="App">
        <main> 
        	<div>
	        	<Switch>
	        		<Route exact path = '/' component = {LoginPage}/>
			       	<Route path = '/menu' component = {NavBar}/>
	        	</Switch>
	        </div>
        </main>
      </div>
    );
  }
}

export default App;
