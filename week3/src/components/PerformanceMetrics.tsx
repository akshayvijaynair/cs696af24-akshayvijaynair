import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function PerformanceMetrics() {
    const cpuUsage = 60;
    const memoryUsage = 40;
    const diskUsage = 80;

    return (
        <>
            <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                    <span>CPU Usage</span>
                    <span>{cpuUsage}%</span>
                </div>
                <ProgressBar now={cpuUsage} variant="dark" className="mb-2"/>
            </div>

            <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                    <span>Memory Usage</span>
                    <span>{memoryUsage}%</span>
                </div>
                <ProgressBar now={memoryUsage} variant="dark" className="mb-2"/>
            </div>

            <div>
                <div className="d-flex justify-content-between mb-1">
                    <span>Disk Usage</span>
                    <span>{diskUsage}%</span>
                </div>
                <ProgressBar now={diskUsage} variant="dark"/>
            </div>
        </>
    );
}

export default PerformanceMetrics;
