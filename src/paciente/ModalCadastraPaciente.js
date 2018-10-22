import React, { Component } from 'react';
import { Col, Input, Button, Modal, ModalBody } from 'mdbreact';
import api from './PacienteServer.js';

 class ModalCadastraPaciente extends Component {
 constructor(props) {
  super(props);
  this.state = {
    modal: false
  }
  this.toggle = this.toggle.bind(this);
}

handleSubmit = event => {
  const newPatient = {
    nome: this.state.nome,
    email: this.state.email,
    cpf: this.state.cpf

  } 
    api.savePatient(newPatient).then(res => {
      console.log(res);
      console.log(res.data);
  })
}

toggle() {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <div id='modalCadastraPaciente'>
      <Button size="sm" className="button circle button-energized ion-paper-airplane" onClick={this.toggle}>
       <i id='iconeButtonCadastrarPaciente' className="fa fa-user-plus" aria-hidden="true"></i>
      </Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalBody>
          <Col md="12">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center">Cadastrar Paciente</p>
              <div className="grey-text">
                <Input label="nome" type="text" onChange={(value) => this.setState({nome: value.target.value})} required/>
                <Input label="email" type="email" onChange={(value) => this.setState({email: value.target.value})} required/>
                <Input label="cpf" type="text" onChange={(value) => this.setState({cpf: value.target.value})} required/>
                <Button color="mdb-color" type="submit" rounded className="float-right">Cadastar</Button>
                <Button color="secondary" onClick={this.toggle} className="float-right">Fechar</Button>{' '}
              </div>
            </form>
          </Col>
        </ModalBody>
      </Modal>
    </div>
    )
  }
}
export default ModalCadastraPaciente