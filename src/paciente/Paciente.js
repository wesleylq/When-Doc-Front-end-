import React, { Component } from 'react';
import './Paciente.css'
import { Table, TableBody, TableHead  } from 'mdbreact'
import ModalCadastraPaciente from './ModalCadastraPaciente'
import api from '../Api';
import ModalConsultaPaciente from './ModalConsultaPaciente'
import Auth from "../login/Auth";

class Paciente extends Component {

  constructor(props) {
    super(props);
        this.state = {
             medico: "",
             pacientes: []
        }

      }

    componentDidMount() {
        api.loadDoctor(Auth.getDoctor())
        .then(res => {
            const medico = res.data;
            this.setState({ medico });
            console.log(medico.crm);


            api.loadPatients(medico.crm)
            .then(res => {
                const pacientes = res.data;
                this.setState({ pacientes });
                //console.log(pacientes);
            })


        })


    }


      render() {
        return (
            <div id='sectionNavBar'>
                <ModalCadastraPaciente/>
                <Table responsive small hover id="tabelaPacientes">
                    <TableHead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>CPF</th>
                            <th>Acao</th>
                        </tr>
                    </TableHead>
                    <TableBody>
                    { this.state.pacientes.map( (paciente,index) =>
                           <tr key={index}>
                               <td>{paciente.nome}</td>
                               <td>{paciente.email}</td>
                               <td>{paciente.cpf}</td>
                               <td> <ModalConsultaPaciente
                                               nome={paciente.nome}
                                               cpf={paciente.cpf}
                                               email={paciente.email}
                                               emailSec={paciente.emailSec}
                                               telefone={paciente.telefone}
                                               telefoneSec={paciente.telefoneSec}
                                               tipoSanguineo={paciente.tipoSanguineo}
                                               rua={paciente.endereco.rua}
                                               bairro={paciente.endereco.bairro}
                                               numero={paciente.endereco.numero}
                                               complemento={paciente.endereco.complemento}
                                               cidade={paciente.endereco.cidade}
                                               pais={paciente.endereco.pais}
                                               cep={paciente.endereco.cep}
                                               />
                               </td>
                           </tr>)}

                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Paciente
