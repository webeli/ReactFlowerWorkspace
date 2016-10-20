import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import Geosuggest from 'react-geosuggest';

const renderGeoField = ({ input, label, type, meta: { touched, error } }) => {
    const onSuggestSelect = (suggest) => {
        input.onChange(suggest);
    };
    return (
        <Geosuggest
            placeholder="Ange lokeringspunkt"
            country="se"
            onSuggestSelect={onSuggestSelect}/>
    )
};

class SettingsDeliveryForm extends Component {

    render() {
        return (
            <div>
                <h4>Updatera Leveransinställningar</h4>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="newGeo" component={renderGeoField}  />
                    <FormGroup>
                        <Field className="b-input" name="newRadius" placeholder="Ange radius i kilometer, exempel: 5" component="input" type="number" required/>
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">
                            Updatera
                        </Button>
                    </FormGroup>
                </form>

                <h4>Nuvarande Leveransinställningar</h4>
                <FormGroup>
                    <FormControl type="text" value={'(Adress) '+this.props.settingsDelivery.adress} disabled/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" value={'(Latitude) '+this.props.settingsDelivery.latitude} disabled/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" value={'(Longitude) '+this.props.settingsDelivery.longitude} disabled/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" value={'(Radius) '+this.props.settingsDelivery.radius+' km'} disabled/>
                </FormGroup>
            </div>
        );
    }
}

SettingsDeliveryForm.defaultProps = {
    settingsDelivery: {
        adress: '',
        latitude: '',
        longitude: '',
        radius: ''
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