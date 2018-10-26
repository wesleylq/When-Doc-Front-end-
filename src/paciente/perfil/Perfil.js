import React from 'react';
import './Perfil.css'

const Perfil = (props) => {
  return (
      <section id='perfilPaciente'>
          <p><strong>Nome: {props.nome}</strong></p>
          <p><strong>Email: {props.cpf}</strong></p>
          <p><strong>Cpf: {props.email}</strong></p>
      </section>
  );
}

export default Perfil;
