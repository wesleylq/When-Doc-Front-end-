import React from 'react';
import Perfil from './perfil/Perfil.js'
import Historico from './historico/Historico.js'
import Prescription from './prescription/Prescription.js';

const TabsConsultaPaciente = (props) => {
  return (
	  	<div>
	  		<ul className="nav nav-justified lighten-3 py-3 mb-3 font-weight-bold z-depth-1" id="myTab" role="tablist">
			  	<li className="nav-item">
			    	<a className="nav-link active" id="tab" data-toggle="tab" href="#perfil" role="tab" aria-controls="Perfil" aria-selected="true">Perfil</a>
			 	</li>
			  	<li className="nav-item">
			   		<a className="nav-link" id="tab" data-toggle="tab" href="#historico" role="tab" aria-controls="Histórico" aria-selected="false">Histórico</a>
			  	</li>
			  	<li className="nav-item">
				    <a className="nav-link" id="tab" data-toggle="tab" href="#receituario" role="tab" aria-controls="Receituário" aria-selected="false">Receituário</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="perfil" role="tabpanel" aria-labelledby="perfil-tab">
		            <Perfil nome ={props.nome}
		                    cpf={props.cpf}
		                    email={props.email}
		                    emailSec={props.emailSec}
		                    telefone={props.telefone}
		                    telefoneSec={props.telefoneSec}
		                    tipoSanguineo={props.tipoSanguineo}
		                    rua={props.rua}
		                    bairro={props.bairro}
		                    numero={props.numero}
		                    complemento={props.complemento}
		                    cidade={props.cidade}
		                    pais={props.pais}
		                    cep={props.cep}
		                    />
        		</div>
				<div className="tab-pane fade" id="historico" role="tabpanel" aria-labelledby="historico-tab"><Historico/></div>
				<div className="tab-pane fade" id="receituario" role="tabpanel" aria-labelledby="receituario-tab"><Prescription 
					nome ={props.nome} cpf={props.cpf} crm={props.crm}/></div>
			</div>
		</div>
    );
}

export default TabsConsultaPaciente;
