import React, { Component } from 'react';

import { Col, Well } from 'react-bootstrap';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Col xs={12} md={12}>
                    <Well>
                        <h4>Dashboard</h4>
                    </Well>
                </Col>
                <Col xs={12} md={2}>
                    <Well>
                        <h4>Ordrar</h4>
                        5
                    </Well>
                </Col>
                <Col xs={12} md={2}>
                    <Well>
                        <h4>Produkter</h4>
                        5
                    </Well>
                </Col>
                <Col xs={12} md={2}>
                    <Well>
                        <h4>Omsättning</h4>
                        0kr
                    </Well>
                </Col>
            </div>
        );
    }
}

export default Dashboard;