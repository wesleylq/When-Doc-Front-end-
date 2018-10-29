import React from 'react';
import './Perfil.css'

const Perfil = (props) => {
  return (
      <section id='perfilPaciente'>
          <p><strong>Nome: {props.nome}</strong></p>
          <p><strong>Cpf: {props.email}</strong></p>
          <p><strong>Email: {props.cpf}</strong></p>
          <p><strong>Email Secundario: {props.emailSec}</strong></p>
          <p><strong>telefone: {props.telefone}</strong></p>
          <p><strong>telefoneSec: {props.telefoneSec}</strong></p>
          <p><strong>tipoSanguineo: {props.tipoSanguineo}</strong></p>
          <p><strong>rua: {props.rua}</strong></p>
          <p><strong>bairro: {props.bairro}</strong></p>
          <p><strong>numero: {props.numero}</strong></p>
          <p><strong>complemento: {props.complemento}</strong></p>
          <p><strong>cidade: {props.cidade}</strong></p>
          <p><strong>pais: {props.pais}</strong></p>
          <p><strong>cep: {props.cep}</strong></p>
      </section>
  );
}

export default Perfil;
