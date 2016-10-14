import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, FormGroup } from 'react-bootstrap';

class SettingsDeliveryForm extends Component {

    render() {
        return (
            <div>
                <h4>Leveransinställningar</h4>
                <form onSubmit={this.props.handleSubmit}>
                    <FormGroup>
                        <Field className="b-input" name="latitude" placeholder="Latitude" component="input" type="text" required/>
                    </FormGroup>
                    <FormGroup>
                        <Field className="b-input" name="longitude" placeholder="Longitude" component="input" type="text" required/>
                    </FormGroup>
                    <FormGroup>
                        <Field className="b-input" name="radius" placeholder="Radius" component="input" type="number" required/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">
                            Updatera
                        </Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

SettingsDeliveryForm = reduxForm({
    form: 'SettingsDeliveryForm' // a unique name for this form
})(SettingsDeliveryForm);

SettingsDeliveryForm = connect(
    state => ({
        initialValues: state.settings.settingsDelivery // pull initial values from account reducer
    })
)(SettingsDeliveryForm);

export default (SettingsDeliveryForm);