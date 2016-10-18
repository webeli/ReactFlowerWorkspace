import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, FormGroup, FormControl, ControlLabel, Modal } from 'react-bootstrap';
import Select from 'react-select';

const validate = values => {
    const errors = {};
    const requiredFields = [ 'name', 'price', 'color', 'event', 'type' ];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Behöver fyllas i'
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    console.log(errors);
    return errors
};

const renderInputField = ({ input, label, type, meta: { touched, error } }) => {
    const getValidationState = (touched, error) => {
        if (touched && error) {
            return 'error'
        } else if (touched) {
            return 'success'
        }
        //touched?error?'error':'success':null
    };
    return (
        <FormGroup validationState={getValidationState(touched, error)}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...input} placeholder={label} type={type}/>
            <FormControl.Feedback />
            {touched && ((error && <span>{error}</span>))}
        </FormGroup>
    )
};


export class SelectInput extends Component {
    onChange(event) {
        if (this.props.input.onChange) {
            this.props.input.onChange(event.value); // <-- To be aligned with how redux-form publishes its CHANGE action payload. The event received is an object with 2 keys: "value" and "label"
        }
    }

    render() {
        return (
            <Select
                {...this.props}
                value={this.props.input.value || ''}
                onBlur={() => this.props.input.onBlur(this.props.input.value)}
                onChange={this.onChange.bind(this)}
                options={this.props.options} // <-- Receive options from the form
            />
        );
    }
}

class ModalNewProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: null
        };
    }

    componentWillMount() {
        this.state = {
            options: null
        };
    }

    render() {
        const colorOptions = [
            { value: 'Grön', label: 'Grön' },
            { value: 'Blå', label: 'Blå' }
        ];

        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Lägg till ny produkt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.props.handleSubmit}>
                        <Field name="name" label="Namn *" component={renderInputField} type="text"/>
                        <Field name="image" label="Bild" component={renderInputField} type="text"/>
                        <Field name="description" label="Beskrivning" component={renderInputField} type="text"/>
                        <Field name="myReduxFormFieldName" component={props =><SelectInput{...props} multi={true} options={colorOptions}/>}/>
                        <Field name="event" label="Event *" component={renderInputField} type="text"/>
                        <Field name="type" label="Type *" component={renderInputField} type="text"/>
                        <Field name="price" label="Pris *" component={renderInputField} type="number"/>
                        <Button type="submit">
                            Lägg till
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        );
    }
}

ModalNewProductForm = reduxForm({
    form: 'NewProductForm', // a unique name for this form
    validate
})(ModalNewProductForm);

export default (ModalNewProductForm);