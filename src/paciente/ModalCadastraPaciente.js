import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Fa, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import axios from 'axios';
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
    data: this.state.data,
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
    <div>
      <Button onClick={this.toggle}>add paciente</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalBody>
          <Col md="12">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center">Cadastrar Paciente</p>
              <div className="grey-text">
                <Input label="nome" onChange={(value) => this.setState({nome: value.target.value})} />
                <Input onChange={(value) => this.setState({data: value.target.value})} />
                <Input onChange={(value) => this.setState({cpf: value.target.value})}/>
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