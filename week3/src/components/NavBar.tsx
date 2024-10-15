import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export default function NavBar (){
return(
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link>
                        <Link to={"/"}>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/link"}>Link</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/counter"}>Counter</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/tictactoe"}>TicTacToe</Link>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}
