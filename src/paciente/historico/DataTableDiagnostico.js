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
      api.loadDiagnosticos(this.props.cpf)
      .then(res => {
          const diagnosticos = res.data;
          this.setState({ diagnosticos });
          //console.log(diagnosticos);
      })
  }

    render() {
    //  console.log(this.props.cpf);
      //console.log(this.state.diagnosticos);
        return (
          <BootstrapTable data={this.state.diagnosticos}>
            <TableHeaderColumn isKey dataField='nomeDiagnostico' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>Diagnostico</TableHeaderColumn>
            <TableHeaderColumn dataField='data' filter={ { type: 'TextFilter' , placeholder:"Filtrar..."  } }>data</TableHeaderColumn>
          </BootstrapTable>
        );
      }
}

export default DataTableDiagnostico;
