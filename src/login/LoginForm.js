import React, { Component } from 'react';
import './LoginForm.css'

import { Row, Input, Button, Card, CardBody } from 'mdbreact';
import LoginModal from './LoginModal';


class LoginForm extends Component {
    
    render() {
        return (
            
    <div id="login">    
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                <Card>                
                  <Row className="d-flex justify-content-center">
                    <h3 className="Black-text mb-3 pt-3 font-weight-bold">When, doc?</h3>
                  </Row>

                <CardBody className="mx-4 mt-4">
                  <Input label="Seu usuário" group type="text" validate />
                  <Input label="Sua senha" group type="password" validate containerClass="mb-0"/>
                  
                  <div className="text-center mb-4 mt-5">
                    <Button color="default" type="button" className="btn-block z-depth-2">Entrar</Button>
                    <p className="text-center">Ou</p>
                    <LoginModal text = "Registre-se!"/>
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

export default LoginForm;


