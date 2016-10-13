import React, { Component } from 'react';

import { Link } from 'react-router';

class WorkspaceMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/dashboard">Överblick</Link></li>
                <li><Link to="/orders">Ordrar</Link></li>
                <li><Link to="/products">Produkter</Link></li>
                <li><Link to="/settings">Inställningar</Link></li>
            </ul>
        );
    }
}

export default WorkspaceMenu;