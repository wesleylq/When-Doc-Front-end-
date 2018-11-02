import React from 'react';
import './MeuPerfil.css';
import EditDados from './EditDados.js';
const MeuPerfil = (props) => {
  return (
      <section className="team-section text-center my-5">
        <div className="jumbotron text-center">
            <EditDados/>
            <h2 className="card-title h2">Lucas venancio Duarte</h2>
            <p className="blue-text my-4 font-weight-bold">espericalidade</p>
            <div className="row d-flex justify-content-center">
              <div className="col-xl-7 pb-2">
                <p className="card-text">CRM</p>
                <p className="card-text">Cpf</p>
              </div>
            </div>
            <hr className="my-4"/>
            <div className="pt-1">
              <p className="card-text">Email</p>
              <p className="card-text">Telefone</p>
            </div>
         </div>
      </section>
  );
}

export default MeuPerfil;
