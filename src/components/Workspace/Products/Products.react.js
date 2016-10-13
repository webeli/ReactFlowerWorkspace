import React, { Component } from 'react';

import { Col, Well } from 'react-bootstrap';

class Products extends Component {
    render() {
        return (
            <div>
                <Col xs={12} md={12}>
                    <Well>
                        <h4>Produkter</h4>
                    </Well>
                </Col>
            </div>
        );
    }
}

export default Products;