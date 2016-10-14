import React, { Component } from 'react';

import { Button, Form, FormControl,FormGroup } from 'react-bootstrap';

class SettingsAccount extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default SettingsAccount;