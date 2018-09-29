import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return (
		
	    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
	      	<a className="navbar-brand" href="#"> 
	       		<span id="brand"> <i className="fas fa-stethoscope"> </i> When, Doc ?</span>
	      	</a>
	      	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	        	<i class="fas fa-bars"></i>
	      	</button>

	      	<div className="collapse navbar-collapse" id="navbarSupportedContent">
	       		<ul className="navbar-nav mr-auto">
	          		<li className="nav-item">
	            		<a className="nav-link active" href="#"> <span>Meu Perfil</span> </a>
	          		</li>
	          		<li className="nav-item">
	            		<a className="nav-link active" href="#"> <span>Paciente</span> </a>
	          		</li>
	        	</ul>
	        	<a className="nav-link active justify-content-end" id='sair' href="#"> <span>Sair</span> </a>
	      	</div>
	    </nav>
	);
}

export default NavBar;


