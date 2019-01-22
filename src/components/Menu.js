import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/Peliculas">Star War</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/Peliculas">Peliculas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Personajes">Personajes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Planetas">Planetas</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Vehiculos">Vehículos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/CrucerosEspaciales">Cruceros Espaciales</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <form className="form-inline my-2 my-lg-0" left>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </Navbar>
            </div>
        );
    }
}