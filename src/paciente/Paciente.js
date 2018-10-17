import React, { Component } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import './Paciente.css'
import { Table, TableBody, TableHead  } from 'mdbreact'
import ModalCadastraPaciente from './ModalCadastraPaciente.js'
import api from './PacienteServer';
class Paciente extends Component {

    state = {
        pacientes: []
    }
    componentDidMount() {
        axios.get(`http://localhost:3000/paciente`)
        .then(res => {
            const pacientes = res.data;
            this.setState({ pacientes });
        })
    }

      render() {
        return (
            <div> 
               <ModalCadastraPaciente/>
                <Table striped bordered hover id="con">
                    <TableHead>
                        <tr>
                            <th>Nome</th>
                            <th>Data Nascimento</th>
                            <th>CPF</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                       { this.state.pacientes.map(paciente =>
                            <tr> 
                                <td>{paciente.nome}</td>
                                <td>{paciente.data}</td>
                                <td>{paciente.cpf}</td>
                            </tr>)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Paciente

