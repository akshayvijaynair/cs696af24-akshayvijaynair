import React from 'react';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Link from "./pages/Link";
import Counter from "./pages/Counter";

function App() {
  return (
      <ThemeProvider>
        <div className="App">
          <NavBar />
            <Container fluid>
                <Routes>
                    <Route path="/"  element={<p>Welcome To React</p>} />
                    <Route path="/link"  element={<Link />} />
                    <Route path="/counter"  element={<Counter />} />
                </Routes>
            </Container>
        </div>
      </ThemeProvider>

  );
}

export default App;
