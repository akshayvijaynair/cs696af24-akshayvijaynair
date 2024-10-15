import {Col, Container, Row} from "react-bootstrap";
import Square from "../components/Square";


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
                    <Square />
                </Col>
            </Row>
        </Container>
    )
}