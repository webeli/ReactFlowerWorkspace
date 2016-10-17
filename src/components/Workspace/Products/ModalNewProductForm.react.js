import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, FormGroup, Modal } from 'react-bootstrap';

const validate = values => {
    console.log(values);
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    if (!values.image) {
        errors.image = 'Required'
    }
    if (!values.description) {
        errors.description = 'Required'
    }
    if (!values.price) {
        errors.price = 'Required'
    }
    return errors
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input className="b-input" {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>))}
        </div>
    </div>
);

class ModalNewProductForm extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Lägg till ny produkt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.props.handleSubmit}>
                        <FormGroup>
                            <Field name="name" placeholder="Namn" component={renderField} type="text" required/>
                        </FormGroup>
                        <FormGroup>
                            <Field name="image" placeholder="Bild" component={renderField} type="text" required/>
                        </FormGroup>
                        <FormGroup>
                            <Field name="description" placeholder="Beskrivning" component={renderField} type="text" required/>
                        </FormGroup>
                        <FormGroup>
                            <Field name="price" placeholder="Pris" component={renderField} type="number" required/>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">
                                Lägg till
                            </Button>
                        </FormGroup>
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