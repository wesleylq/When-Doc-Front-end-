import React, { Component } from 'react';
import { Col, Button, Modal, ModalBody, Row, Card, FormInline} from 'mdbreact';
import api from '../Api';
import Auth from "../login/Auth";

class ModalCadastraPaciente extends Component {
 constructor(props) {
  super(props);
  this.state = {
    modal: false
  }
  this.toggle = this.toggle.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.importPatients = this.importPatients.bind(this);
}

handleSubmit(){
  const newPatient = {
    nome: this.state.nome,
    email: this.state.email,
    cpf:this.state.cpf,
    senha: this.state.cpf,
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
  }).catch(error => {
    console.log(error.response)
});

  setTimeout(() =>{
      api.addPatients(Auth.getDoctor(), newPatient.cpf).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
    });
  }, 1000)

}

importPatients(){
      const cpf = this.state.cpf;
      api.addPatients(Auth.getDoctor(), cpf).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
  });
}

toggle() {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <div id='modalCadastraPaciente'>
      <i onClick={this.toggle} id='iconeButtonCadastrarPaciente' className="navbar-toggler fa fa-user-plus" aria-hidden="true"></i>
      <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
        <ModalBody>
            <Card>
                <div className="tab_container">
                  <input id="tabCriarPacienteNovo" type="radio" name="tabs5" defaultChecked/>
                  <label id="tab" htmlFor="tabCriarPacienteNovo"><i className="fa fa-folder-open-o"></i><span>Criar Paciente Novo</span></label>

                  <input id="tabImportarNovoPaciente" type="radio" name="tabs5"/>
                  <label id="tab" htmlFor="tabImportarNovoPaciente"><i className="fa fa-envelope-o"></i><span>Importar Novo Paciente</span></label>

                  <section id="contentCriarPacienteNovo">

                      <Col md="12">
                        <form className='needs-validation'>
                          <p className="h5 text-center">Cadastrar Paciente</p>
                          <div className="grey-text">
                            <Row>
                              <div className="col-md-4 mb-3">
                                 <input name='nome' onChange={(value) => this.setState({nome: value.target.value})} type="text" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Nome" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input  name='cpf' onChange={(value) => this.setState({cpf: value.target.value})} type="number" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Cpf" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input onChange={(value) => this.setState({tipoSanguineo: value.target.value})} type="text" id="defaultFormRegisterConfirmEx3" className="form-control" name='TipoSanguineo' placeholder="tipoSanguineo" required/>
                              </div>
                            </Row>
                            <Row>
                              <div className="col-md-4 mb-3">
                                <input  onChange={(value) => this.setState({email: value.target.value})} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name='email' placeholder="Email" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input  onChange={(value) => this.setState({emailSec: value.target.value})} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name='email' placeholder="Email" required/>
                              </div>
                            </Row>
                            <Row>
                              <div className="col-md-4 mb-3">
                                <input onChange={(value) => this.setState({telefone: value.target.value})} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Telefone" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input  name='telefone' onChange={(value) => this.setState({telefoneSec: value.target.value})} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Telefone" required/>
                              </div>
                            </Row>
                            <Row>
                              <div className="col-md-4 mb-3">
                                <input  onChange={(value) => this.setState({rua: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='rua' placeholder="Rua" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input onChange={(value) => this.setState({bairro: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='bairro' placeholder="Bairro" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input onChange={(value) => this.setState({numero: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='numero' placeholder="Numero" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input  onChange={(value) => this.setState({complemento: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='complemento' placeholder="Complemento" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input onChange={(value) => this.setState({cidade: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='cidade' placeholder="Cidade" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input onChange={(value) => this.setState({estado: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='estado' placeholder="Estado" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input  onChange={(value) => this.setState({pais: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='pais' placeholder="Pais" required/>
                              </div>
                              <div className="col-md-4 mb-3">
                                <input  onChange={(value) => this.setState({cep: value.target.value})} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='cep' placeholder="Cep" required/>
                              </div>
                            </Row>
                            <Button type="submit" color="mdb-color" onClick={this.handleSubmit}>Cadastar</Button>
                            <Button color="secondary" onClick={this.toggle} className="float-right">Fechar</Button>{' '}
                          </div>
                        </form>
                      </Col>

                  </section>
                  <section id="contentImportarNovoPaciente">
                      <FormInline>
                        <input  name='cpfImport' onChange={(value) => this.setState({cpf: value.target.value})} type="number" className="form-control" placeholder="Cpf" required/>
                        <Button type="submit" color="mdb-color" onClick={this.importPatients}>Importar</Button>
                      </FormInline>
                  </section>
                </div>
            </Card>
        </ModalBody>
      </Modal>
    </div>
    )
  }
}
export default ModalCadastraPaciente
