import React from 'react';
import { BrowserRouter ,Switch, Route, Redirect } from 'react-router-dom';
import Paciente from './paciente/Paciente.js'
import MeuPerfil from './meuPerfil/MeuPerfil.js'
import Auth from "./login/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        Auth.isAuthenticated === true ? (
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
                <PrivateRoute path = '/menu/meuPerfil' component = {MeuPerfil}/>
                <PrivateRoute path = '/menu/paciente' component = {Paciente}/>
               
            </Switch>
        </BrowserRouter>
        
    );
}

export default Router;
