import React from "react";
import {Card} from "react-bootstrap";

interface StatCardProps {
    title: string;
    children: React.ReactNode;
}

export default function StatCard({title, children}: StatCardProps) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{children}</Card.Text>
            </Card.Body>
        </Card>
    )
}