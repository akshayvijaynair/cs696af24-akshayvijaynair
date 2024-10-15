import {Col, Container, Row} from "react-bootstrap";
import Board from "../components/Board";


export default function TicTacToe() {

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 >Tic Tac Toe</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Board />
                </Col>
            </Row>
        </Container>
    )
}