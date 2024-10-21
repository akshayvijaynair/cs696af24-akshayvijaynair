import React from "react";
import {Card} from "react-bootstrap";

interface StatCardProps {
    title: string;
    children: React.ReactNode;
}

export default function StatCard({ title, children }: StatCardProps) {
    return (
        <Card className="h-100 d-flex flex-column">  {/* Ensure the card takes full height */}
            <Card.Body className="d-flex flex-column">  {/* Ensure the body uses flex layout */}
                <Card.Title>{title}</Card.Title>
                <div className="flex-grow-1 d-flex flex-column">  {/* Container for children with flex-grow */}
                    {children}
                </div>
            </Card.Body>
        </Card>
    );
}
