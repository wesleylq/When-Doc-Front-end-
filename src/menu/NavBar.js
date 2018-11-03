import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Router from '../Router.js';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <div>
                <Navbar id='navbar' dark expand="sm" fixed='top' scrolling>
                    <NavbarBrand href="/menu">
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                            <NavItem id='navItem'>
                                <Link className="nav-link" to="/menu/meuPerfil">Meu Perfil</Link>
                            </NavItem>
                            <NavItem id='navItem'>
                                <Link className="nav-link" to="/menu/paciente">Pacientes</Link>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right >
                            <NavItem>
                                <NavLink to="logaut">Sair</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>

               <Router/>
            </div>
        );
    }
}

export default NavBar;
