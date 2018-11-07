import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import api from '../../Api'

class DataTableDiagnostico extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            diagnosticos: []
         };
         
    }

    componentDidMount() {
      api.loadDiagnosticos().then(res => {
          const diagnosticos = res.data;
          this.setState({ diagnosticos });
      })    
  }

    render() {
        return (
          <BootstrapTable data={ this.state.diagnosticos}>           
            <TableHeaderColumn isKey dataField='nomeDiagnostico' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>Diagnostico</TableHeaderColumn>            
          </BootstrapTable>
        );
      }
}

export default DataTableDiagnostico;





