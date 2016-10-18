import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, FormGroup, FormControl, ControlLabel, Modal } from 'react-bootstrap';

const validate = values => {
    const errors = {};
    const requiredFields = [ 'name', 'image', 'description', 'price' ];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Required'
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    console.log(errors);
    return errors
};

const renderField = ({ input, label, type, meta: { touched, error } }) => {
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

class ModalNewProductForm extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Lägg till ny produkt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.props.handleSubmit}>
                        <Field name="name" label="Namn" component={renderField} type="text" required/>
                        <Field name="image" label="Bild" component={renderField} type="text" required/>
                        <Field name="description" label="Beskrivning" component={renderField} type="text" required/>
                        <Field name="price" label="Pris" component={renderField} type="number" required/>
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