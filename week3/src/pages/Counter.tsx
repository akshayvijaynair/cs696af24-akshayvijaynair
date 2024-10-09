import {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
    };
    const decrement = () => {
        let test = counter - 1;
        setCounter(test > 0 ? test : 0);

    };

    useEffect(() => {
        fetch('http://localhost:9000/intro', {
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true'
        }
        })
            .then(response => response.text())
            .then(text => console.log(text))
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Button onClick={() => increment()}>Increase</Button>
                </Col>
                <Col>
                    <Button variant="warning" onClick={() => decrement()}>Decrease</Button>
                </Col>
                <Col>
                    <h1 className="h-100 border-black">{counter}</h1>
                </Col>
            </Row>
        </Container>
    )
}