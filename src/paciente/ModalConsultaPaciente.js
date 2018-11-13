import React, { Component } from 'react';
import { Button, Modal, ModalBody } from 'mdbreact';
import TabsConsultaPaciente from './TabsConsultaPaciente'

class ModalConsultaPaciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      consulta:""
    };
  }

  

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button size="sm" onClick={this.toggle}>Consultar</Button>
        <Modal size ="lg" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <TabsConsultaPaciente
                        nome={this.props.nome}
                        cpf={this.props.cpf}
                        email={this.props.email}
                        emailSec={this.props.emailSec}
                        telefone={this.props.telefone}
                        telefoneSec={this.props.telefoneSec}
                        tipoSanguineo={this.props.tipoSanguineo}
                        rua={this.props.rua}
                        bairro={this.props.bairro}
                        numero={this.props.numero}
                        complemento={this.props.complemento}
                        cidade={this.props.cidade}
                        pais={this.props.pais}
                        cep={this.props.cep}
                        crm={this.props.crm}
                        consultaId = {this.state.consulta.id}
                        />
            <Button size="sm" color="secondary" onClick={this.toggle} className="float-right">Fechar</Button>{' '}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalConsultaPaciente;
