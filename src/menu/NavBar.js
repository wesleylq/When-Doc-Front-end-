import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './NavBar.css'

class NavBar extends React.Component {
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
            <Router>
                <Navbar id='navbar' dark expand="md" scrolling>
                    <NavbarBrand href="/menu">
                        <i className="fa fa-heartbeat" aria-hidden="true"></i> <strong> When,Doc</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left id="navbar">
                          <NavItem>
                              <NavLink to="#">Meu Perfil</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/paciente">Pacientes</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right id="navbar">
                          <NavItem>
                            <NavLink to="logaut">Sair</NavLink>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavBar;