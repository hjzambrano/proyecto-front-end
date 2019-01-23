import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem
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

  handleOnClick() {
    alert("Funcionalidad aun no desarrollada, disculpe...")
  }
  
  render() {
    return (
      <div>
        <Navbar className="text-white darken-3" color="dark" dark expand="md">
          <NavbarBrand href="/">Star War</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/peliculas">Peliculas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/personajes">Personajes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/planetas">Planetas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/vehiculos">Vehiculos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/cruceros-espaciales">Cruceros Espaciales</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <form className="form-inline my-2 my-lg-0" left>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleOnClick}>Search</button>
          </form>
        </Navbar>
      </div>
    );
  }
}