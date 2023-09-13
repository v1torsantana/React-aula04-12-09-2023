import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Carousels from "../carousels/Carousels";
import Formulario from '../formulario/Formulario'

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand as={Link} to='/'>Projeto_Template</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/carousels">Carousel</Nav.Link>
                <Nav.Link href="/formulario">Formulário</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
            <Switch>
            <Route exact path="/Carousels">
                <Carousels />
              </Route>            
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route path="/Formulario">
                <Formulario />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}
