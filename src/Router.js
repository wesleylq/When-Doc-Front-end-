import React from 'react';
import { BrowserRouter ,Switch, Route, Redirect } from 'react-router-dom';
import Paciente from './paciente/Paciente.js';
import MeuPerfil from './meuPerfil/MeuPerfil.js';
import Auth from "./login/Auth";
import Navbar from './menu/NavBar.js';
import NavBar from './menu/NavBar.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.getAuthenticate() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  
const Router = () => {
    return (
       
            <Switch> 
                       
                <PrivateRoute path = '/menu/meuPerfil' component = {MeuPerfil}/>
                <PrivateRoute path = '/menu/paciente' component = {Paciente}/>
    
            </Switch>
       
        
    );
}

export default Router;
