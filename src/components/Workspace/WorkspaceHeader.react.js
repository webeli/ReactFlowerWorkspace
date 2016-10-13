import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class WorkspaceHeader extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a>BLOOMDO Workspace</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem onClick={() => this.props.signOut()}>Logga ut</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(authActions.signOutUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceHeader);