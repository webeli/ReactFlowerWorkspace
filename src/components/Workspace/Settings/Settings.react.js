import React, { Component } from 'react';

import SettingsDeliveryForm from './SettingsDeliveryForm.react';
import SettingsAccountForm from './SettingsAccountForm.react';

import { connect } from 'react-redux';
import * as settingsActions from '../../../actions/settingsActions';

import { Col, Well } from 'react-bootstrap';

class Settings extends Component {

    componentDidMount() {
        if (this.props.auth.uid) {
            this.props.getSettingsDelivery(this.props.auth.uid);
        }
    }

    updateSettingsDelivery = (values) => {
        this.props.updateSettingsDelivery(this.props.auth.uid, values);
    };

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
                        <SettingsAccountForm />
                    </Well>
                </Col>
                <Col xs={12} md={6}>
                    <Well>
                        <SettingsDeliveryForm onSubmit={this.updateSettingsDelivery} />
                    </Well>
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getSettingsDelivery: (uid) => dispatch(settingsActions.getSettingsDelivery(uid)),
        updateSettingsDelivery: (uid, data) => dispatch(settingsActions.updateSettingsDelivery(uid, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);