import React from 'react';
import { Card,CardTitle,Input, FormInline,Button,Container, Row, Col } from 'mdbreact';
import "./Prescription.css"

class Prescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }

    add = () => {
        const medicamento = {
            nome: this.state.nome,
            descricao: this.state.descricao,
            dosagem: this.state.dosagem,
            data: this.state.data,
            quantidade: this.state.quantidade
            
          }
        
      }
    render() {
        return (
          <Card>
            <div className="container ">            
            <div className="row">
                <div className="col-sm-12 ">
                <div className= "card-body"><legend align="center">Nome do Paciente</legend></div>                                               
                            <div className="tab_container">
                                <input id="tab1" type="radio" name="tabs" defaultChecked/>
                                <label id="tab" htmlFor="tab1"><i className="test fa fa-code"></i><span>Diagnosticar</span></label>

                                <input id="tab2" type="radio" name="tabs" />
                                <label id="tab" htmlFor="tab2"><i className="test fa fa-pencil-square-o"></i><span>Prescrever Medicamentos</span></label>

                                <section id="content1" className="tab_content">
                                    <div className="col-sm-12 card-body">
                                        <div className="form-group">
                                            <label htmlFor="concept" className="control-label">Diagnostico</label>
                                            <div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description" className="control-label">Descrição</label>
                                            <div>
                                                <textarea className="form-control" type="textarea" id="message" rows="2"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="content2" className="tab_content">
                                <div className="row">
                                <div className="col-sm-5">
                                        
                                        <div className="panel panel-default">
                                            <div className="panel-body form-horizontal">
                                                <div className="form-group">
                                                    <label htmlFor="concept" className="control-label">Medicamento</label>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            onChange={(value) => this.setState({nome: value.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="description" className="control-label">Descrição</label>
                                                    <div>
                                                        <textarea className="form-control" type="textarea" id="message" rows="2"
                                                         onChange={(value) => this.setState({descricao: value.target.value})}></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="amount" className=" col-sm-5 control-label">Quantidade</label>
                                                    <div className="col-sm-9">
                                                        <input type="number" className="form-control" id="amount" name="amount" 
                                                         onChange={(value) => this.setState({quantidade: value.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="status" className="col-sm-5 control-label">Dosagem</label>
                                                       <div className="col-sm-9">
                                                        <input type="date" className="form-control" id="date" name="date" 
                                                         onChange={(value) => this.setState({dosagem: value.target.value})}/>                                                    
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="date" className="col-sm-5 control-label">Data</label>
                                                    <div className="col-sm-9">
                                                        <input type="date" className="form-control" id="date" name="date" 
                                                         onChange={(value) => this.setState({data: value.target.value})}/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-12 text-center">
                                                        <Button type="button" size="sm" className="btn btn-default preview-add-button" 
                                                            onClick={this.add}>
                                                            <span className="glyphicon glyphicon-plus"></span> Adicionar
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-7">
                                        
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div className="table-responsive">
                                                    <table className="table preview-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Medicamento</th>
                                                                <th>Descrição</th>
                                                                <th>Quantidade</th>
                                                                <th>Status</th>
                                                                <th>Data</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th>1</th>
                                                                <th>2</th>
                                                                <th>3</th>
                                                                <th>4</th>
                                                                <th>5</th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="col-xs-12">
                                            <Button size = "sm" color="success" rounded className="float-right" onClick={this.handleSubmission}>Feito!</Button>
                                            </div>
                                        </div> 
                                                                             
                                    </div>
                                    </div>
                                    
                                </section>
                                
                            </div>
                        </div>


                    </div>
        </div>
        </Card>
   
        );
    }
}

export default Prescription;