import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, Well } from 'react-bootstrap';
import Geosuggest from 'react-geosuggest';

const renderGeoField = ({ input, label, type, meta: { touched, error } }) => {
    const onSuggestSelect = (suggest) => {
        input.onChange(suggest);
    };
    return (
        <Geosuggest
            placeholder="Ange leveranspunkt"
            country="se"
            onSuggestSelect={onSuggestSelect}/>
    )
};

class SettingsDeliveryForm extends Component {

    render() {
        const settingsDelivery = this.props.settingsDelivery;
        return (
            <div>
                <h4>Updatera Leveransinställningar</h4>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="newGeo" component={renderGeoField}  />
                    <FormGroup>
                        <Field className="b-input" name="newRadius" placeholder="Ange radius (kilometer), exempel: 10" component="input" type="number" required/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">
                            Updatera
                        </Button>
                    </FormGroup>
                </form>
                <hr />
                <h4>Nuvarande Leveransinställningar</h4>
                <FormGroup>
                    <FormControl type="text" value={'(Adress) '+settingsDelivery.adress} disabled/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" value={'(Koordinat) '+settingsDelivery.latitude+', '+settingsDelivery.longitude} disabled/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" value={'(Radius) '+settingsDelivery.radius+' km'} disabled/>
                </FormGroup>
                <Well bsSize="small">
                    <b>Sammanfattning:</b><span>{` Ni levererar från ${settingsDelivery.adress} (${settingsDelivery.latitude},${settingsDelivery.longitude}) med en radie på ${settingsDelivery.radius}km`}</span>
                </Well>
            </div>
        );
    }
}

SettingsDeliveryForm.defaultProps = {
    settingsDelivery: {
        adress: 'ingen vald adress',
        latitude: '0',
        longitude: '0',
        radius: '0'
    }
};

SettingsDeliveryForm = reduxForm({
    form: 'SettingsDeliveryForm' // a unique name for this form
})(SettingsDeliveryForm);

function mapStateToProps(state) {
    return {
        settingsDelivery: state.settings.settingsDelivery
    };
}

export default connect(mapStateToProps)(SettingsDeliveryForm);