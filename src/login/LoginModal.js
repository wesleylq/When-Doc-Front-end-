import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import Stepper from "./Stepper"


class LoginModal extends React.Component {
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
      <div>
        <Button outline onClick={() => this.toggle(14)} >{this.props.text}</Button>
        <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
          <ModalHeader toggle={() => this.toggle(14)}>Modal title</ModalHeader>
          <ModalBody>
            <Stepper/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggle(14)}>Close</Button>
            <Button color="primary" onClick={() => this.toggle(14)}>Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;