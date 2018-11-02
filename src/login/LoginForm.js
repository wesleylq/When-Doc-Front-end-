import React from 'react';
import './LoginForm.css'
import api from '../Api'

import { Row, Input, Button, Card, CardBody } from 'mdbreact';
import LoginModal from './LoginModal';
import { withRouter } from "react-router-dom";



class LoginForm extends React.Component {
    
    componentDidMount(){
        api.loadUsers().then((res) => {
          console.log(res.data),
          this.setState({users:res.data})}); 
       
      }

      handleLogin = () => {                   
          
          if(this.validateUser(this.state.loginId,this.state.loginPass)){
            console.log("login!")
            this.props.history.push("/menu");
          }else{
            console.log("Login invalido!") 
          }
          
         
      }

      validateUser = (loginId,loginPass) => {
        for (var user of this.state.users) {
            if(loginId === user.id && loginPass === user.pass){
                return true
            }
          }
          return false
      }
    
    
    render() {
        return (
            
    <div>    
        <div className="container" id= "login">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                <Card>                
                  <Row className="d-flex justify-content-center">
                    <h3 className="Black-text mb-3 pt-3 font-weight-bold">When, doc?</h3>
                  </Row>

                <CardBody className="mx-4 mt-4">
                  <Input label="Seu usuário" group type="text" validate onChange={(value) => this.setState({loginId: value.target.value})} />
                  <Input label="Sua senha" group type="password" validate containerClass="mb-0" onChange={(value) => this.setState({loginPass: value.target.value})}/>
                  
                  
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


