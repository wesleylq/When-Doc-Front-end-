import React from 'react';
import { Button, Modal, ModalBody, Input } from 'mdbreact';
import './MeuPerfil.css';
import api from '../Api';

class MeuPerfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false,
      medico: ""
    };
  }

handleSubmit = event => {
  const newDoctor = {
    nome: this.props.nome,
    especialidade : this.state.especialidade,
    cpf : this.props.cpf,
    crm : this.props.crm,
    email: this.state.email,
    telefone: this.state.telefone,

  }
    api.saveDoctor(newDoctor).then(res => {
      console.log(res);
      console.log(res.data);
  })
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
        <i onClick={() => this.toggle(14)} id='iconeButtonConfiguracaoMedico' className="navbar-toggler fa fa-cog" aria-hidden="true"></i>
        <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
          <form className="mx-3 grey-text" onSubmit={this.handleSubmit}>
            <ModalBody>
                <p className="h5 text-center">Atualizar Informações</p>
                <Input type="text" onChange={(value) => this.setState({especialidade: value.target.value})} label="especialidade"/>
                <Input type="email" onChange={(value) => this.setState({email: value.target.value})} label="email"/>
                <Input type="text" onChange={(value) => this.setState({telefone: value.target.value})}  label="telefone" />
            </ModalBody>

            <Button color="mdb-color" type="submit" rounded >Atualizar</Button>
            <Button color="secondary" onClick={() => this.toggle(14)} className="float-right">Sair</Button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default MeuPerfil;
