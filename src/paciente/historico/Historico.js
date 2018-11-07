import React from 'react';
import { Card} from 'mdbreact';
import './Historico.css';
import DataTableDiagnostico from './DataTableDiagnostico';
import DataTableMedicamentos from './DataTableMedicamentos';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Historico extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Card>
       <div className="tab_container">
          <input id="tab4" type="radio" name="tabs2" defaultChecked />
          <label id="tab" htmlFor="tab4"><i className="test fa fa-code"></i><span>Diagnosticos</span></label>

          <input id="tab5" type="radio" name="tabs2" />
          <label id="tab" htmlFor="tab5"><i className="test fa fa-pencil-square-o"></i><span>Medicamentos</span></label>

          <section id="content4" className="tab_content">
            <DataTableDiagnostico />
          </section>

          <section id="content5" className="tab_content">
            <DataTableMedicamentos />
          </section>

        </div>

        </Card>
      
    );
  }
}

export default Historico;
