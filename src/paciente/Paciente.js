import React, { Component } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import './Paciente.css'
import { Table, TableBody, TableHead  } from 'mdbreact'
import ModalCadastraPaciente from './ModalCadastraPaciente'
import api from './PacienteServer.js';
import ModalConsultaPaciente from './ModalConsultaPaciente'
class Paciente extends Component {

    state = {
        pacientes: []
    }
    componentDidMount() {
        api.loadPatients()
        .then(res => {
            const pacientes = res.data;
            this.setState({ pacientes });
        })
    }

      render() {
        return (
            <div> 
               <ModalCadastraPaciente/>
                <Table small reponsive maxHeight bordered hover id="con">
                    <TableHead>
                        <tr>
                            <th>Nome</th>
                            <th>Data Nascimento</th>
                            <th>CPF</th>
                            <th>Acao</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                       { this.state.pacientes.map(paciente =>
                            <tr> 
                                <td>{paciente.nome}</td>
                                <td>{paciente.data}</td>
                                <td>{paciente.cpf}</td>
                                <td> <ModalConsultaPaciente teste={paciente.id}/> </td>
                            </tr>)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Paciente

