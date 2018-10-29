import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Paciente from './paciente/Paciente.js'
import MeuPerfil from './meuPerfil/MeuPerfil.js'

const Router = (props) => {
    return (
        <Switch>
            <Route path = '/menu/meuPerfil' component = {MeuPerfil}/>
            <Route path = '/menu/paciente' component = {Paciente}/>
        </Switch>
    );
}

export default Router;
