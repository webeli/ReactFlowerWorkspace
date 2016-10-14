import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

class WorkspaceMenu extends Component {
    render() {
        return (
            <div>
                <Link to="/dashboard"><ListGroupItem>Överblick</ListGroupItem></Link>
                <Link to="/orders"><ListGroupItem>Ordrar</ListGroupItem></Link>
                <Link to="/products"><ListGroupItem>Produkter</ListGroupItem></Link>
                <Link to="/settings"><ListGroupItem>Inställningar</ListGroupItem></Link>
            </div>
        );
    }
}

export default WorkspaceMenu;