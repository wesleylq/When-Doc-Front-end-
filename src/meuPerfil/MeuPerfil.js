import React, { Component } from 'react';
import api from '../Api';
import './MeuPerfil.css';
import EditDados from './EditDados.js';

class MeuPerfil extends Component {

   state = {
        medico: ""
    }
    componentDidMount() {
        api.loadDoctor()
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
                <EditDados nome={this.state.medico.nome}
                            cpf={this.state.medico.cpf}
                            crm={this.state.medico.crm}/>
                <h2 className="card-title h2">{this.state.medico.nome}</h2>
                <p className="text my-4">{this.state.medico.especialidade}</p>
                <div className="row d-flex justify-content-center">
                  <div className="col-xl-7 pb-2">
                    <p className="card-text">{this.state.medico.cpf}</p>
                    <p className="card-text">{this.state.medico.crm}</p>
                  </div>
                </div>
                <hr className="my-4"/>
                <div className="pt-1">
                  <p className="card-text">{this.state.medico.email}</p>
                  <p className="card-text">{this.state.medico.telefone}</p>
                </div>
             </div>
          </section>
        </div>
    );
  }
}
export default MeuPerfil;
