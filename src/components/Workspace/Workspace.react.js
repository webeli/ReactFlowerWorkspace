import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

import WorkspaceHeader from './WorkspaceHeader.react';
import WorkspaceMenu from './WorkspaceMenu.react';

class Workspace extends Component {
    render() {
        return (
            <div>
                <WorkspaceHeader />
                <Col xs={12} md={2}>
                    <WorkspaceMenu />
                </Col>
                <Col xs={12} md={10}>
                    {this.props.children}
                </Col>
            </div>
        );
    }
}

export default Workspace;