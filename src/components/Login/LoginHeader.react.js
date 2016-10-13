import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';

class LoginHeader extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">BLOOMDO Inloggning</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default LoginHeader;