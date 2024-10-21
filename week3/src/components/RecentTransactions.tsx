import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function RecentTransactions() {
    return (
        <ListGroup className="flex-grow-1 d-flex flex-column">
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">New Users Added</div>
                <Badge bg="primary" pill>14</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">Tickets Raised</div>
                <Badge bg="primary" pill>14</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">MTTR</div>
                <Badge bg="success" pill>4</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">Test Coverage</div>
                <Badge bg="success" pill>92</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">Manual chat intervention</div>
                <Badge bg="warning" pill>45</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">Active Calls</div>
                <Badge bg="info" pill>45</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">Cluster Size</div>
                <Badge bg="danger" pill>27</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">API status</div>
                <Badge bg="success" pill>Good</Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">Database writes</div>
                <Badge bg="info" pill>1200 p.m</Badge>
            </ListGroup.Item>
        </ListGroup>
    );
}
