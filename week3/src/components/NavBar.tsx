import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";

export default function NavBar (){
return(
    <Navbar bg="light" expand="lg" className="mb-4">
        <Navbar.Brand href="/" className="m-2"><h3>Dashboard</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
            <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
            </Form>
            <Nav>
                <Nav.Link href="#notifications">Notifications</Nav.Link>
                <Nav.Link href="#profile">User Profile</Nav.Link>
                <NavDropdown title="Others" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/link">Link</NavDropdown.Item>
                    <NavDropdown.Item href="/counter">Counter</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/tictactoe">TicTacTow</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
}
