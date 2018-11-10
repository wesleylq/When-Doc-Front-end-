import React, { Component } from 'react';
import api from '../Api';
import './MeuPerfil.css';
import EditDados from './EditDados.js';
import Auth from "../login/Auth";
import DadosMedico from "./DadosMedico.js";

class MeuPerfil extends Component {

  constructor(props) {
    super(props);
        this.state = {
             medico: ""
        }

      }

    componentDidMount() {
        api.loadDoctor(Auth.getDoctor())
        .then(res => {
            const medico = res.data;
            this.setState({ medico });
        })
    }

  render() {
    return (
        <div id="sectionNavBar">
          <section className="team-section text-center my-5">
            <div className="jumbotron text-center">
                <EditDados  nome={this.state.medico.nome}
                            crm={this.state.medico.crm}
                            especialidade={this.state.medico.especialidade}
                            cpf={this.state.medico.cpf}
                            email={this.state.medico.email}
                            senha={this.state.medico.senha}
                            telefone={this.state.medico.telefone}/>

                <DadosMedico nome={this.state.medico.nome}
                             crm={this.state.medico.crm}
                             especialidade={this.state.medico.especialidade}
                             cpf={this.state.medico.cpf}
                             email={this.state.medico.email}
                             senha={this.state.medico.senha}
                             telefone={this.state.medico.telefone}/>
             </div>
          </section>
        </div>
    );
  }
}
export default MeuPerfil;
