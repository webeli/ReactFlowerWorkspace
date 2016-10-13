import React, { Component } from 'react';

import { Link } from 'react-router';

class WorkspaceMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        );
    }
}

export default WorkspaceMenu;