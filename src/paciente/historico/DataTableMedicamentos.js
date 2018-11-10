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
    /*
    componentDidMount() {
      api.loadMedicamentos().then(res => {
          const medicamentos = res.data;
          this.setState({ medicamentos });
      })
    }*/

    render() {
        return (
          <BootstrapTable data={ this.state.medicamentos } trClassName="tr-string-example">
            <TableHeaderColumn isKey dataField='nome' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>Nome</TableHeaderColumn>
            <TableHeaderColumn dataField='dosagem' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>Dosagem</TableHeaderColumn>
            <TableHeaderColumn dataField='intervalo' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>Intervalo</TableHeaderColumn>
          </BootstrapTable>
        );
      }
}

export default DataTableMedicamentos;





