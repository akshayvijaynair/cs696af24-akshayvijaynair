import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Link from "./pages/Link";
import Counter from "./pages/Counter";
import TicTacToe from "./pages/TicTacToe";
import DashboardLayout from "./pages/DashboardLayout";
import Footer from "./components/Footer";

function App() {
    return (
        <ThemeProvider>
            <div className="App d-flex flex-column min-vh-100">
                <NavBar/>
                <Container fluid className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<DashboardLayout/>}/>
                        <Route path="/link" element={<Link/>}/>
                        <Route path="/counter" element={<Counter/>}/>
                        <Route path="/tictactoe" element={<TicTacToe/>}/>
                    </Routes>
                </Container>
                <Footer/>
            </div>
        </ThemeProvider>

    );
}

export default App;
