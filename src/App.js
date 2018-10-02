import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './LoginPage';
 


class App extends Component {
  render() {
      return (
        <Router>
          <Route exact path = '/' component = {LoginPage}/>
        </Router>

    );
  }
}

export default App;
