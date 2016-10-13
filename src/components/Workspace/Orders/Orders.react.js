import React, { Component } from 'react';

import { Col, Well, ListGroup, ListGroupItem } from 'react-bootstrap';

class Orders extends Component {
    render() {
        return (
            <div>
                <Col xs={12} md={12}>
                    <Well>
                        <h4>Ordrar</h4>
                    </Well>
                </Col>
                <Col xs={12} md={12}>
                    <ListGroup>
                        <ListGroupItem bsStyle="warning">2016-10-13-14:40 Obehandlad</ListGroupItem>
                        <ListGroupItem bsStyle="success">2016-10-12-19:30 Klar</ListGroupItem>
                    </ListGroup>
                </Col>
            </div>
        );
    }
}

export default Orders;