import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import NavBar from './menu/NavBar.js'
import Paciente from './paciente/Paciente.js'
class App extends Component {
  render() {
    return (
    	<div className="App">
        <main> 
        	<div>
           <NavBar/>
	        	<Switch>
	        		<Route exact path = '/' component = {LoginPage}/>
              <Route path = '/paciente' component = {Paciente}/>
	        	</Switch>
	        </div>
        </main>
      </div>
    );
  }
}

export default App;
