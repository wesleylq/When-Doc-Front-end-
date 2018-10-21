import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import TabsConsultaPaciente from './TabsConsultaPaciente'

class ModalConsultaPaciente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>

            <TabsConsultaPaciente/>

            <Button size="sm" color="secondary" onClick={this.toggle} className="float-right">Fechar</Button>{' '}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalConsultaPaciente;