import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, FormGroup } from 'react-bootstrap';

class SettingsAccountForm extends Component {

    render() {
        return (
            <div>
                <h4>Kontoinställningar</h4>
                <form onSubmit={this.props.handleSubmit}>
                    <FormGroup>
                        <Field className="b-input" name="name" placeholder="Företagsnamn*" component="input" type="text" required/>
                    </FormGroup>
                    <FormGroup>
                        <Field className="b-input" name="city" placeholder="Stad*" component="input" type="text" required/>
                    </FormGroup>
                    <FormGroup>
                        <Field className="b-input" name="adress" placeholder="Adress*" component="input" type="text" required/>
                    </FormGroup>
                    <FormGroup>
                        <Field className="b-input" name="number" placeholder="Telefonnummer*" component="input" type="text" required/>
                    </FormGroup>
                    <FormGroup>
                        <Field className="b-input" name="deliverytime" placeholder="Leveranstider" component="input" type="text" />
                    </FormGroup>
                    <FormGroup>
                        <Field className="b-input" name="deliveryfee" placeholder="Leveransavgift" component="input" type="text" />
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

SettingsAccountForm = reduxForm({
    form: 'SettingsAccountForm' // a unique name for this form
})(SettingsAccountForm);

SettingsAccountForm = connect(
    state => ({
        initialValues: state.settings.settingsAccount // pull initial values from account reducer
    })
)(SettingsAccountForm);

export default (SettingsAccountForm);