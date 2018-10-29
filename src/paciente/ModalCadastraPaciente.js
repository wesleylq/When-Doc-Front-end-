import React, { Component } from 'react';
import { Col, Input, Button, Modal, ModalBody, Container, Row} from 'mdbreact';
import api from '../Api'

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
    cpf: this.state.cpf,
    emailSec: this.state.emailSec,
    telefone: this.state.telefone,
    telefoneSec: this.state.telefoneSec,
    tipoSanguineo: this.state.tipoSanguineo,

    endereco : {
      rua: this.state.rua,
      bairro: this.state.bairro,
      numero: this.state.numero,
      complemento: this.state.complemento,
      cidade: this.state.cidade,
      estado: this.state.estado,
      pais: this.state.pais,
      cep: this.state.cep
    },
    app: false

  }
    api.savePatient(newPatient).then(res => {
      console.log(res);
      console.log(res.data);
  })
}

submitHandler = (event) => {
   event.preventDefault();
   event.target.className += ' was-validated';
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
      <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <ModalBody>
          <Col md="12">
            <form className='needs-validation' onSubmit={this.handleSubmit}>
              <p className="h5 text-center">Cadastrar Paciente</p>
              <div className="grey-text">

                <Row>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Nome</label>
                     <input name='nome' onChange={(value) => this.setState({nome: value.target.value})} type="text" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Nome" required/>

                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">Cpf</label>
                    <input  name='cpf' onChange={(value) => this.setState({cpf: value.target.value})} type="number" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Cpf" required/>

                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Tipo Sanguineo</label>
                    <input onChange={(value) => this.setState({tipoSanguineo: value.target.value})} type="text" id="defaultFormRegisterConfirmEx3" className="form-control" name='tipoSanguineo' placeholder="tipoSanguineo" required/>

                  </div>
                </Row>

                <Row>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Email</label>
                    <input  onChange={(value) => this.setState({email: value.target.value})} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name='email' placeholder="Email" required/>

                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Email Secundario</label>
                    <input  onChange={(value) => this.setState({emailSec: value.target.value})} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name='email' placeholder="Email" required/>

                  </div>
                </Row>

                <Row>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Telefone</label>
                    <input onChange={(value) => this.setState({telefone: value.target.value})} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Telefone" required/>

                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Telefone 2</label>
                    <input  name='telefone' onChange={(value) => this.setState({telefoneSec: value.target.value})} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Telefone" required/>

                  </div>
                </Row>

                <Row>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Rua</label>
                    <input  onChange={(value) => this.setState({rua: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='rua' placeholder="Rua" required/>

                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Bairro</label>
                    <input onChange={(value) => this.setState({bairro: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='bairro' placeholder="Bairro" required/>

                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Numero</label>
                    <input onChange={(value) => this.setState({numero: value.target.value})} type="number" id="defaultFormRegisterPasswordEx4" className="form-control" name='numero' placeholder="Numero" required/>

                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Complemento</label>
                    <input  onChange={(value) => this.setState({complemento: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='complemento' placeholder="Complemento" required/>

                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Cidade</label>
                    <input onChange={(value) => this.setState({cidade: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='cidade' placeholder="Cidade" required/>

                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Estado</label>
                    <input onChange={(value) => this.setState({estado: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='estado' placeholder="Estado" required/>

                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Pais</label>
                    <input  onChange={(value) => this.setState({pais: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='pais' placeholder="Pais" required/>

                  </div>

                  <div className="col-md-4 mb-3">
                    <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Cep</label>
                    <input  onChange={(value) => this.setState({cep: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='cep' placeholder="Cep" required/>

                  </div>
                </Row>
                <Button color="mdb-color" type="submit" rounded >Cadastar</Button>
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
