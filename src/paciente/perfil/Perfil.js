import React from 'react';
import { Card } from 'mdbreact';
import './Perfil.css';

const Perfil = (props) => {
  return (
      <Card>
          <div className="tab_container">
            <input id="tabDadosPaciente" type="radio" name="tabs" defaultChecked/>
            <label id="tab" htmlFor="tabDadosPaciente"><i className="fa fa-folder-open-o"></i><span>Dados Paciente</span></label>

            <input id="tabEnderecoPaciente" type="radio" name="tabs"/>
            <label id="tab" htmlFor="tabEnderecoPaciente"><i className="fa fa-envelope-o"></i><span>Endereço Paciente</span></label>

              <section id="contentDadosPaciente">
                <p><strong>Nome: </strong>{props.nome}</p>
                <p><strong>Cpf: </strong>{props.email}</p>
                <p><strong>Email: </strong>{props.cpf}</p>
                <p><strong>Email Secundario: </strong>{props.emailSec}</p>
                <p><strong>Telefone: </strong>{props.telefone}</p>
                <p><strong>TelefoneSec: </strong>{props.telefoneSec}</p>
                <p><strong>TipoSanguineo: </strong>{props.tipoSanguineo}</p>
            </section>
            <section id="contentEnderecoPaciente">
                <p><strong>Rua: </strong>{props.rua}</p>
                <p><strong>Bairro: </strong>{props.bairro}</p>
                <p><strong>Numero: </strong>{props.numero}</p>
                <p><strong>Complemento: </strong>{props.complemento}</p>
                <p><strong>Cidade: </strong>{props.cidade}</p>
                <p><strong>Pais: </strong>{props.pais}</p>
                <p><strong>Cep: </strong>{props.cep}</p>
            </section>
          </div>
      </Card>
  );
}

export default Perfil;
