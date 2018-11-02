import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import './MeuPerfil.css';

class MeuPerfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false
    };
  }

  toggle(nr) {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <Container>
        <i onClick={() => this.toggle(14)} id='iconeButtonConfiguracaoMedico' className="navbar-toggler fa fa-cog" aria-hidden="true"></i>
        <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
          <ModalHeader toggle={() => this.toggle(14)}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(14)}>Close</Button>
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default MeuPerfil;