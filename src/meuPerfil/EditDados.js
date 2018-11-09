import React from 'react';
import { Button, Modal, ModalBody, Input } from 'mdbreact';
import './MeuPerfil.css';
import api from '../Api';
import Auth from "../login/Auth";

class MeuPerfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal14: false,
      medico: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.novasInformacoes = this.novasInformacoes.bind(this);
  }

handleSubmit = () => {
    const novaInfo = this.novasInformacoes(this.state.especialidade, this.state.email, this.state.telefone);
    const newDoctor = {
      nome: this.props.nome,
      especialidade : novaInfo.novaEspecialidade,
      cpf : this.props.cpf,
      crm : this.props.crm,
      email: novaInfo.novoEmail,
      telefone: novaInfo.novoTelefone

    }
    console.log(Auth.getDoctor());
    console.log(newDoctor);
    api.saveDoctor(newDoctor,Auth.getDoctor()).then(res => {
        console.log(res);
        console.log(res.data);
    })

}

  novasInformacoes = (especialidade, email, telefone) => { 
    var info = {
      novaEspecialidade : this.props.especialidade,
      novoEmail : this.props.email,
      novoTelefone : this.props.telefone
    }
    if(especialidade !== undefined) {
      info.novaEspecialidade = especialidade;
    }
    if(email !== undefined) {
      info.novoEmail = email;
    }
    if(telefone !== undefined) {
      info.novoTelefone = telefone;
    }
    return info;
  }


  toggle(nr) {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    //console.log(Auth.getDoctor);
    return (
      <div>
        <i onClick={() => this.toggle(14)} id='iconeButtonConfiguracaoMedico' className="navbar-toggler fa fa-cog" aria-hidden="true"></i>
        <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
          <form className="mx-3 grey-text">
            <ModalBody>
                <p className="h5 text-center">Atualizar Informações</p>
                <Input type="text" onChange={(value) => this.setState({especialidade: value.target.value})} label="nova especialidade"/>
                <Input type="email" onChange={(value) => this.setState({email: value.target.value})} label="novo email"/>
                <Input type="text" onChange={(value) => this.setState({telefone: value.target.value})}  label="novo telefone" />
            </ModalBody>
            <Button color="mdb-color" onClick={this.handleSubmit} >Atualizar</Button>
            <Button color="secondary" onClick={() => this.toggle(14)} className="float-right">Sair</Button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default MeuPerfil;
