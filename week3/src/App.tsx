import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Link from "./pages/Link";
import Counter from "./pages/Counter";
import TicTacToe from "./pages/TicTacToe";

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
                    <Route path="/tictactoe"  element={<TicTacToe />} />
                </Routes>
            </Container>
        </div>
      </ThemeProvider>

  );
}

export default App;
