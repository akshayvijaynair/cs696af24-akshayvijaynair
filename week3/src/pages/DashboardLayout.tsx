import React from 'react';
import { Row, Col, Navbar, Stack} from 'react-bootstrap';
import {FiHome} from "react-icons/fi";
import {FiUsers} from "react-icons/fi";
import {IoAnalyticsSharp} from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import {FiSettings} from "react-icons/fi";
import SalesOverview from "../components/SalesOverview";
import PerformanceMetrics from "../components/PerformanceMetrics";
import RecentTransactions from "../components/RecentTransactions";
import StatCard from "../components/StatCard";

const DashboardLayout = () => {
    return (
        <Row>
            <Col md={1} className="bg-light sidebar mr-4">
                <Navbar bg="light" expand="lg" className="flex-column align-content-start">
                    <Navbar.Brand href="/dashboard" className="mb-1"><FiHome/> Dashboard</Navbar.Brand>
                    <Navbar.Brand href="/users" className="mb-1"><FiUsers/>Users</Navbar.Brand>
                    <Navbar.Brand href="/analytics" className="mb-1"><IoAnalyticsSharp/> Analytics</Navbar.Brand>
                    <Navbar.Brand href="/orders" className="mb-1"><FiShoppingCart/> Orders</Navbar.Brand>
                    <Navbar.Brand href="/settings" className="mb-1"><FiSettings/> Settings</Navbar.Brand>
                </Navbar>
            </Col>

            <Col md={10} className="main-content">
                <Row>
                    <Col xs={12} md={4} className="mb-4">
                        <StatCard title="Total Users">
                            <strong className="fs-2">10,245</strong>
                        </StatCard>
                    </Col>
                    <Col xs={12} md={4} className="mb-4">
                        <StatCard title="Revenue">
                            <strong className="fs-2">$45,678</strong>
                        </StatCard>
                    </Col>
                    <Col xs={12} md={4} className="mb-4">
                        <StatCard title="Orders">
                            <strong className="fs-2">1,234</strong>
                        </StatCard>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={12} md={4}>
                        <Stack gap={4}>
                            <StatCard title="Conversion Rate">
                                <strong className="fs-2">2.3%</strong>
                            </StatCard>
                            <StatCard title="Recent Event Summary">
                                <RecentTransactions />
                            </StatCard>
                        </Stack>
                    </Col>
                    <Col xs={12} md={8}>
                        <Stack gap={4}>
                            <StatCard title="Sales Overview">
                                <SalesOverview />
                            </StatCard>
                            <StatCard title="Performance Metrics">
                                <PerformanceMetrics />
                            </StatCard>
                        </Stack>
                    </Col>
                </Row>
                {/*<Row className="mb-4">
                        <Col>
                            <StatCard title="Performance Metrics">
                                <PerformanceMetrics />
                            </StatCard>
                        </Col>
                    </Row>*/}
            </Col>
        </Row>
    );
};

export default DashboardLayout;
