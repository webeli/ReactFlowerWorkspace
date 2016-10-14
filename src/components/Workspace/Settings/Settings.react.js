import React, { Component } from 'react';

import SettingsDeliveryForm from './SettingsDeliveryForm.react';
import SettingsAccountForm from './SettingsAccountForm.react';

import { connect } from 'react-redux';
import * as settingsActions from '../../../actions/settingsActions';

import { Col, Well } from 'react-bootstrap';

class Settings extends Component {

    componentDidMount() {
        if (this.props.uid) {
            this.props.getSettingsDelivery(this.props.uid);
            this.props.getSettingsAccount(this.props.uid);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.uid) {
            this.props.getSettingsDelivery(nextProps.uid);
            this.props.getSettingsAccount(nextProps.uid);
        }
    }

    updateSettingsAccount = (values) => {
        this.props.updateSettingsAccount(this.props.uid, values);
    };

    updateSettingsDelivery = (values) => {
        this.props.updateSettingsDelivery(this.props.uid, values);
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
                        <SettingsAccountForm onSubmit={this.updateSettingsAccount} />
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
        uid: state.auth.uid
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getSettingsAccount: (uid) => dispatch(settingsActions.getSettingsAccount(uid)),
        updateSettingsAccount: (uid, data) => dispatch(settingsActions.updateSettingsAccount(uid, data)),

        getSettingsDelivery: (uid) => dispatch(settingsActions.getSettingsDelivery(uid)),
        updateSettingsDelivery: (uid, data) => dispatch(settingsActions.updateSettingsDelivery(uid, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);