import React from 'react';
import { Card } from 'mdbreact';
import './Perfil.css';

const Perfil = (props) => {
  return (
      <Card>
          <section id='perfilPaciente'>
            <ul className="nav nav-pills btn-group" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a class="btn btn-default form-check-label active" id="pills-tab" data-toggle="pill" href="#pills-dados-paciente" role="tab"
                  aria-controls="pills-home" aria-selected="true" >Dados Paciente</a>
              </li>
              <li className="nav-item">
                <a class="btn btn-default form-check-label" id="pills-tab" data-toggle="pill" href="#pills-endereco-paciente" role="tab"
                  aria-controls="pills-profile" aria-selected="false">Endereco Paciente</a>
              </li>
            </ul>

            <div className="tab-content pt-2 pl-1" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-dados-paciente" role="tabpanel" aria-labelledby="pills-home-tab">
                  <p><strong>Nome: {props.nome}</strong></p>
                  <p><strong>Cpf: {props.email}</strong></p>
                  <p><strong>Email: {props.cpf}</strong></p>
                  <p><strong>Email Secundario: {props.emailSec}</strong></p>
                  <p><strong>telefone: {props.telefone}</strong></p>
                  <p><strong>telefoneSec: {props.telefoneSec}</strong></p>
                  <p><strong>tipoSanguineo: {props.tipoSanguineo}</strong></p>
              </div>
              <div className="tab-pane fade" id="pills-endereco-paciente" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <p><strong>rua: {props.rua}</strong></p>
                  <p><strong>bairro: {props.bairro}</strong></p>
                  <p><strong>numero: {props.numero}</strong></p>
                  <p><strong>complemento: {props.complemento}</strong></p>
                  <p><strong>cidade: {props.cidade}</strong></p>
                  <p><strong>pais: {props.pais}</strong></p>
                  <p><strong>cep: {props.cep}</strong></p>
              </div>
            </div>
          </section>
      </Card>
  );
}

export default Perfil;
