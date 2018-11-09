import React from 'react';
import './LoginForm.css'
import api from '../Api'
import logo from './whendoc-logo.jpg'

import { Input, Button, Card, CardBody, toast, ToastContainer,CardImage  } from 'mdbreact';
import LoginModal from './LoginModal';
import { withRouter } from "react-router-dom";
import Auth from "./Auth";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                 user: ""                        
            }
            this.handleLogin = this.handleLogin.bind(this);
          }
          
  
    /*
    componentDidMount() {
        api.loadUsers().then(res => {
            const users = res.data;
            this.setState({ users });
        })
    }*/

      handleLogin = () => {
          
        const user = {
            senha: this.state.senha,        
            nome: null,
            cpf: null,
            crm: null,
            especialidade: null,
            email: this.state.email,
            telefone: null
            
          }
        
         api.getDoctor(user).then(res => {
            Auth.authenticate(res.data);
            const user = res.data;
            this.setState({ user });
            
            
        })

        setTimeout(() =>{if(Auth.getAuthenticate()){
            this.props.history.push("/menu");
          }else{
            toast("Login Inaválido! Tente Novamente.", {                
                autoClose: 3000, 
                closeButton: false, 
                hideProgressBar: true        
              });
          }}, 1000)
           
      }

      validateUser = (email,senha) => {
          
        for (var user of this.state.users) {            
            if(email === user.email && senha === user.senha){
                return true
            }
          }
          return false
      }


    render() {
        return (
            
    <div> <ToastContainer position="top-center"  hideProgressBar  />  
        <div  className="container" id= "login">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                <Card>
                <CardImage cascade className="img-fluid" src={logo} />
                                 

                <CardBody className="mx-4 mt-4">
                <form>
                  <Input label="Email" group type="email" required onChange={(value) => this.setState({email: value.target.value})} />
                  <Input label="Senha" group type="password" required containerClass="mb-0" onChange={(value) => this.setState({senha: value.target.value})}/>
                </form>
                  
                  <div className="text-center mb-4 mt-5">
                    <Button color="default" type="button" className="btn-block z-depth-2" onClick={this.handleLogin}>Entre</Button>
                    <p className="text-center">Ou</p>
                    <LoginModal text = "Cadastre-se!"/>
                  </div>

                </CardBody>
              </Card>
                </div>
            </div>
        </div>
    </div>



        );
    }
}

export default withRouter(LoginForm);
