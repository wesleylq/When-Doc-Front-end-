import React from 'react';

const DadosMedico = (props) => {

  return (
        <div id="dadosMedico">
          <h2 className="card-title h2">Dados Pessoais</h2>
          <p className="text my-4"> <strong>nome: </strong> {props.nome}</p>
          <p className="text my-4"> <strong>Especialidade: </strong> {props.especialidade}</p>
          <p className="card-text"> <strong>Cpf: </strong> {props.cpf}</p>
          <p className="card-text"> <strong>Crm: </strong> {props.crm}</p>
          <hr className="my-4"/>
          <div className="pt-1">
            <h2 className="card-title h2">Dados Para Contatos</h2>
            <p className="card-text"> <strong>Email: </strong> {props.email}</p>
            <p className="card-text"> <strong>Telefone: </strong> {props.telefone}</p>
          </div>
        </div>
  );
}

export default DadosMedico;
