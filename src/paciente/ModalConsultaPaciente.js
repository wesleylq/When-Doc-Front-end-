import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


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
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {this.props.teste}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalConsultaPaciente;