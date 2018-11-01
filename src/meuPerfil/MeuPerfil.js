import React from 'react';
import './MeuPerfil.css'

const MeuPerfil = (props) => {
  return (
      <section className="team-section text-center my-5">
          <div class="jumbotron text-center">
              <h2 class="card-title h2">Lucas venancio Duarte</h2>
              <p class="blue-text my-4 font-weight-bold">espericalidade</p>
              <div class="row d-flex justify-content-center">
                <div class="col-xl-7 pb-2">
                  <p class="card-text">CRM</p>
                  <p class="card-text">Cpf</p>
                </div>
              </div>
              <hr class="my-4"/>
              <div class="pt-1">
                <p class="card-text">Email</p>
                <p class="card-text">Telefone</p>
              </div>
           </div>
      </section>
  );
}

export default MeuPerfil;
