import React, { Component } from 'react';

import { Button, Form, FormControl,FormGroup, Col, Well } from 'react-bootstrap';

class Settings extends Component {
    render() {
        return (
            <div>
                <Col xs={12} md={12}>
                    <Well>
                        <h4>Inställningar</h4>
                    </Well>
                </Col>
                <Col xs={12} md={6}>
                    <Well>
                        <h4>Kontoinställningar</h4>
                            <Form>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Företagsnamn" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Stad" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Adress" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Telefonnummer" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Leveranstider" />
                                </FormGroup>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Leveransavgift" />
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit">
                                        Updatera
                                    </Button>
                                </FormGroup>
                            </Form>
                    </Well>
                </Col>
                <Col xs={12} md={6}>
                    <Well>
                        <h4>Leveransinställningar</h4>
                        <Form>
                            <FormGroup>
                                <FormControl type="text" placeholder="Latitude" />
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="text" placeholder="Longitude" />
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="text" placeholder="Radius" />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit">
                                    Updatera
                                </Button>
                            </FormGroup>
                        </Form>
                    </Well>
                </Col>
            </div>
        );
    }
}

export default Settings;