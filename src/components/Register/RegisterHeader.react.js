import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';

class RegisterHeader extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>BLOOMDO Registrering (Florister)</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default RegisterHeader;