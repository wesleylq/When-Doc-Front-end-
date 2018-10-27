import React from 'react';
import { Card,CardTitle,Input, FormInline,Button,Container, Row, Col } from 'mdbreact';

class Prescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <Card>
            <div className="container ">            
            <div className="row">
                <div className="col-sm-12 card-header">                
                    <legend>Para: Nome do Paciente</legend>
                </div>
                
                <div className="col-sm-5 ">
                    <h4>Nova receita:</h4>
                    <div className="panel panel-default">                    
                        <div className="panel-body form-horizontal">
                            <div className="form-group">
                                <label htmlFor="concept" className="control-label">Medicamento</label>
                                <div>
                                    <input type="text" className="form-control"/>                                    
                                </div>                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="description" className="control-label">Descrição</label>
                                <div>
                                <textarea className="form-control" type="textarea" id="message" rows="2"></textarea>
                                </div>
                            </div> 
                            <div className="form-group">
                                <label htmlFor="amount" className=" col-sm-5 control-label">Quantidade</label>
                                <div className="col-sm-9">
                                    <input type="number" className="form-control" id="amount" name="amount"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="status" className="col-sm-5 control-label">Status</label>
                                <div className="col-sm-9">
                                    <select className="form-control" id="status" name="status">
                                        <option>Paid</option>
                                        <option>Unpaid</option>
                                    </select>
                                </div>
                            </div> 
                            <div className="form-group">
                                <label htmlFor="date" className="col-sm-5 control-label">Data</label>
                                <div className="col-sm-9">
                                    <input type="date" className="form-control" id="date" name="date"/>
                                </div>
                            </div>   
                            <div className="form-group">
                                <div className="col-sm-12 text-center">
                                    <Button type="button" size="sm" className="btn btn-default preview-add-button">
                                        <span className="glyphicon glyphicon-plus"></span> Adicionar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div> 
                <div className="col-sm-7">
                    <h4>Receitas:</h4>
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
                    <div className="row text-right">
                        <div className="col-xs-12">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <hr/>
                            
                        </div>                
                    </div>
                </div>
            </div>
        </div>
        </Card>
   
        );
    }
}

export default Prescription;