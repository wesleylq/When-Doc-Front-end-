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
    cpf: this.state.cpf

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
                        <input value={this.state.fname} name='fname' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Nome" required/>
                        <div style={{top: 'auto'}} className="valid-tooltip">Nome Parece Bom!</div>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Digite um nome valido</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterEmailEx2" className="grey-text">Cpf</label>
                        <input value={this.state.lname} name='cpf' onChange={this.changeHandler} type="number" id="defaultFormRegisterEmailEx2" className="form-control" placeholder="Cpf" required/>
                        <div style={{top: 'auto'}} className="valid-tooltip">Cpf Parece Bom!</div>
                            <div style={{top: 'auto'}} className="invalid-tooltip">Digite um cpf valido</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Tipo Sanguineo</label>
                        <input value={this.state.email} onChange={this.changeHandler} type="text" id="defaultFormRegisterConfirmEx3" className="form-control" name='tipoSanguineo' placeholder="tipoSanguineo" required/>
                        <div style={{top: 'auto'}} className="valid-tooltip">Tipo Sanguineo Parece Bom!</div>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Digite um Tipo Sanguineo valido</div>
                      </div>
                    </Row>

                    <Row>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Email</label>
                        <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name='email' placeholder="Email" required/>
                        <div style={{top: 'auto'}} className="valid-tooltip">Email Parece Bom!</div>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Digite um Email valido</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterConfirmEx3" className="grey-text">Email Secundario</label>
                        <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3" className="form-control" name='email' placeholder="Email" required/>
                        <div style={{top: 'auto'}} className="valid-tooltip">Email Parece Bom!</div>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Digite um Email valido</div>
                      </div>
                    </Row>

                    <Row>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Telefone</label>
                        <input value={this.state.fname} name='telefone' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Telefone" required/>
                        <div style={{top: 'auto'}} className="valid-tooltip">Telefone Parece Bom!</div>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Digite um Telefone valido</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Telefone 2</label>
                        <input value={this.state.fname} name='telefone' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx" className="form-control" placeholder="Telefone" required/>
                        <div style={{top: 'auto'}} className="valid-tooltip">Telefone Parece Bom!</div>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Digite um Telefone valido</div>
                      </div>
                    </Row>

                    <Row>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Rua</label>
                        <input value={this.state.city} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='rua' placeholder="Rua" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Rua Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite uma Rua valido</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Bairro</label>
                        <input value={this.state.state} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='bairro' placeholder="Bairro" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Bairro Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite um Bairro valido</div>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Numero</label>
                        <input value={this.state.zip} onChange={this.changeHandler} type="number" id="defaultFormRegisterPasswordEx4" className="form-control" name='numero' placeholder="Numero" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Numero Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite um Numero valido</div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Complemento</label>
                        <input value={this.state.zip} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='complemento' placeholder="Complemento" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Complemento Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite um Complemento valido</div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Cidade</label>
                        <input value={this.state.zip} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='cidade' placeholder="Cidade" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Cidade Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite um Cidade valido</div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Estado</label>
                        <input value={this.state.zip} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='estado' placeholder="Estado" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Estado Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite um Estado valido</div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Pais</label>
                        <input value={this.state.zip} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='pais' placeholder="Pais" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Pais Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite um Pais valido</div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">Cep</label>
                        <input value={this.state.zip} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4" className="form-control" name='cep' placeholder="Cep" required/>
                        <div style={{top: 'auto'}} className="invalid-tooltip">Cep Parece Bom!</div>
                        <div style={{top: 'auto'}} className="valid-tooltip">Digite um Cep valido</div>
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
