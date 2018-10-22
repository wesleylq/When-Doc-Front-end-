import React from 'react';

const TabsConsultaPaciente = (props) => {
  return (
	  	<div>
	  		<ul className="nav nav-tabs" id="myTab" role="tablist">
			  	<li className="nav-item">
			    	<a className="nav-link active" id="perfil-tab" data-toggle="tab" href="#perfil" role="tab" aria-controls="perfil" aria-selected="true">perfil</a>
			 	</li>
			  	<li className="nav-item">
			   		<a className="nav-link" id="historico-tab" data-toggle="tab" href="#historico" role="tab" aria-controls="historico" aria-selected="false">historico</a>
			  	</li>
			  	<li className="nav-item">
				    <a className="nav-link" id="receituario-tab" data-toggle="tab" href="#receituario" role="tab" aria-controls="receituario" aria-selected="false">receituario</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="perfil" role="tabpanel" aria-labelledby="perfil-tab">1</div>
				<div className="tab-pane fade" id="historico" role="tabpanel" aria-labelledby="historico-tab">2</div>
				<div className="tab-pane fade" id="receituario" role="tabpanel" aria-labelledby="receituario-tab">3</div>
			</div>
		</div>
    );
}

export default TabsConsultaPaciente;