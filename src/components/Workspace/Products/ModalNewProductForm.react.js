import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel, Modal } from 'react-bootstrap';
import Select from 'react-select';

const validate = values => {
    const errors = {};
    const requiredFields = [ 'name', 'price', 'colors', 'events', 'types' ];
    requiredFields.forEach(field => {
        if (!values[ field ]) {
            errors[ field ] = 'Behöver fyllas i'
        }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
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

const renderMultiSelect = ({ input, options, label, ...rest }) => {
  return (
      <FormGroup>
          <ControlLabel>{label}</ControlLabel>
          <Select
              {...input}
              multi={true}
              options={options}
              onBlur={() => input.onBlur()}
              value={input.value}
              {...rest}/>
      </FormGroup>
  )
};


class ModalNewProductForm extends Component {

    render() {
        const colorOptions = [
            { value: 'Grön', label: 'Grön' },
            { value: 'Blå', label: 'Blå' },
            { value: 'Gul', label: 'Gul' },
            { value: 'Vit', label: 'Vit' },
            { value: 'Svart', label: 'Svart' },
            { value: 'Orange', label: 'Orange' },
            { value: 'Lila', label: 'Lila' },
            { value: 'Rosa', label: 'Rosa' },
            { value: 'Röd', label: 'Röd' },
            { value: 'Turkås', label: 'Turkås' }
        ];

        const eventOptions = [
            { value: 'Bröllop', label: 'Bröllop' },
            { value: 'Födelsedag', label: 'Födelsedag' },
            { value: 'Begravning', label: 'Begravning' },
            { value: 'Födsel', label: 'Födsel' },
            { value: 'Midsommar', label: 'Midsommar' },
            { value: 'Kärlek', label: 'Kärlek' },
            { value: 'Tack', label: 'Tack' },
            { value: 'Krya', label: 'Krya' }
        ];

        const typeOptions = [
            { value: 'Ros', label: 'Ros' },
            { value: 'Tusilago', label: 'Tusilago' },
            { value: 'Vitsippa', label: 'Vitsippa' },
            { value: 'Liljor', label: 'Liljor' },
            { value: 'Orkideer', label: 'Orkideer' },
            { value: 'Buketter', label: 'Buketter' }
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

                        <Field name="colors" label="Färg *" component={renderMultiSelect} options={colorOptions} />
                        <Field name="events" label="Event *" component={renderMultiSelect} options={eventOptions} />
                        <Field name="types" label="Typ *" component={renderMultiSelect} options={typeOptions} />

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

// Decorate with connect to read form values
const selector = formValueSelector('NewProductForm'); // <-- same as form name
ModalNewProductForm = connect(
    state => {
        const colors = selector(state, 'colors');
        return {
            colors
        }
    }
)(ModalNewProductForm);

export default (ModalNewProductForm);