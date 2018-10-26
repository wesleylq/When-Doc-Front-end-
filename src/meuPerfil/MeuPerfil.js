import React from 'react';
import './MeuPerfil.css'

const MeuPerfil = (props) => {
  return (
      <section className="team-section text-center my-5">
        <div >
          <div>
            <h5 className="font-weight-bold mt-4 mb-3">Williams</h5>
            <p className="text-uppercase blue-text"><strong>CRM</strong></p>
            <p className="text-uppercase blue-text"><strong>Especialidade</strong></p>
            <p className="text-uppercase blue-text"><strong>CPF</strong></p>
            <p className="text-uppercase blue-text"><strong>Email</strong></p>
            <p className="text-uppercase blue-text"><strong>Telefone</strong></p>
          </div>
        </div>
      </section>
  );
}

export default MeuPerfil;
