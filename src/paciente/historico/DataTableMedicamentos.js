import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import api from '../../Api'

class DataTableMedicamentos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medicamentos: []
         };

    }

    componentDidMount() {
      api.loadMedicamentos(this.props.cpf).then(res => {
          const medicamentos = res.data;
          this.setState({ medicamentos });
      })
  }

    render() {
        return (
          <BootstrapTable data={ this.state.medicamentos } trClassName="tr-string-example">
            <TableHeaderColumn isKey dataField='nome' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>Nome</TableHeaderColumn>
            <TableHeaderColumn dataField='dosagem'>Dosagem</TableHeaderColumn>
            <TableHeaderColumn dataField='dataInicial' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>Data</TableHeaderColumn>
          </BootstrapTable>
        );
      }
}

export default DataTableMedicamentos;
