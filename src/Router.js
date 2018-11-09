import React from 'react';
import { BrowserRouter ,Switch, Route, Redirect } from 'react-router-dom';
import Paciente from './paciente/Paciente.js';
import MeuPerfil from './meuPerfil/MeuPerfil.js';
import Auth from "./login/Auth";
import Navbar from './menu/NavBar.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        false ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
  
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>                
                <Route path = '/menu/meuPerfil' component = {MeuPerfil}/>
                <Route path = '/menu/paciente' component = {Paciente}/>
                PrivateRoute path = '/menu/' component = {Navbar}
               
            </Switch>
        </BrowserRouter>
        
    );
}

export default Router;
