import React from 'react';
import {  Button, Modal, ModalBody, ModalHeader, Row, Col, Input } from 'mdbreact';
import api from '../Api'



class LoginModal extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          modal14: false,
          formActivePanel1: 1,
          formActivePanel1Changed: false,
                    
        }
        
      }
      
  toggle(nr) {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
    this.setState({formActivePanel1: 1})
    this.setState({senha: null, nome: null,cpf: null,especialidade: null,email: null, telefone: null})
  }

  swapFormActive = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
    });
  }

  handleNextPrevClick = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
    });
    
  }

  calculateAutofocus = (a) => {
    if (this.state['formActivePanel' + a + 'Changed']) {
      return true
    }
  }

  handleSubmission = () => {
    //falta validar!   
    if(true){
      const newUser = {
        senha: this.state.senha,        
        nome: this.state.nome,
        cpf: this.state.cpf,
        crm: this.state.crm,
        especialidade: this.state.especialidade,
        email: this.state.email,
        telefone: this.state.telefone
        
      }
      api.saveUser(newUser).then((res) => console.log(res))      
      
    }else{
      console.log("parametros invalidos") 
    }
    console.log(this.state.pass)   
    this.toggle(14);  
  }
  

  
  
  
  render() {
    return (
      <div>
        <Button outline onClick={() => this.toggle(14)} >{this.props.text}</Button>
        <Modal isOpen={this.state.modal14} toggle={() => this.toggle(14)} centered>
          <ModalHeader toggle={() => this.toggle(14)}>Cadastro</ModalHeader>
          <ModalBody>
          <div>          
              <form>
                <Row>
                  { this.state.formActivePanel1 === 1  &&
                  (<Col md="12">
                    <h3 className="font-weight-bold pl-0 my-4">
                      <strong>Informações Pessoais</strong></h3>
                    <Input label="CPF" className="mt-4" onChange={(value) => this.setState({cpf: value.target.value})} 
                    autoFocus={this.calculateAutofocus(1)}/>
                    <Input label="Nome Completo" className="mt-4" onChange={(value) => this.setState({nome: value.target.value})}/>
                    <Input label="Email" className="mt-4" onChange={(value) => this.setState({email: value.target.value})}/>
                    <Input label="Telefone" className="mt-4" onChange={(value) => this.setState({telefone: value.target.value})}/>                    
                    <Input label="Senha" className="mt-4" onChange={(value) => this.setState({senha: value.target.value})}/>
                    <Input label="Repita a senha" className="mt-4" onChange= {(value) => this.setState({senhaVal: value.target.value})}/>
                    <Button rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>próximo</Button>
                  </Col>)}
    
                  { this.state.formActivePanel1 === 2  &&
                  (<Col md="12">
                    <h3 className="font-weight-bold pl-0 my-4"><strong>Informações Profissionais</strong></h3>
                    <Input label="CRM" className="mt-3" onChange={(value) => this.setState({crm: value.target.value})}
                    autoFocus={this.calculateAutofocus(1)}/>
                    <Input label="Especialidade" className="mt-3" onChange={(value) => this.setState({especialidade: value.target.value})}/> 
                    <Button rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>próximo</Button>
                  </Col>)}
    
                  { this.state.formActivePanel1 === 3  &&
                  (<Col md="12">
                    <h3 className="font-weight-bold pl-0 my-4"><strong>Clínica</strong></h3>
                    <Input label="Nome da clinica" className="mt-4" autoFocus={this.calculateAutofocus(1)}/>
                    <Input label="CNPJ" className="mt-4" />
                    <Input label="Endereço" type="textarea" rows="2"/>
                    <Input label="Complemento" type="textarea" rows="2"/>
                    <Input label="Número" className="mt-4" />
                    <Input label="CEP" className="mt-4" />
                    <Input label="Cidade" className="mt-4" />
                    <Input label="Estado" className="mt-4"/>
                    <Button rounded className="float-right" onClick={this.handleNextPrevClick(1)(4)}>próximo</Button>
                  </Col>)}
    
                  { this.state.formActivePanel1 === 4  &&
                  (<Col>
                    <h3 className=""><strong>Termos e condições</strong></h3>

                    
                    <div className="form-check my-4">
                      <input className="form-check-input" type="checkbox" id="defaultCheck12" />
                      <label htmlFor="defaultCheck12" className="grey-text">Aceito os<a href="" className="blue-text"> Termos e condições</a></label>
                    </div>
                    <Button color="primary" rounded className="float-right" onClick={this.handleSubmission}>Feito!</Button>
                  </Col>)}
              </Row>
            </form>
          </div>
          </ModalBody>          
        </Modal>
      </div>
    );
  }
}

export default LoginModal;