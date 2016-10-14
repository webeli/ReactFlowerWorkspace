import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, FormGroup, Modal } from 'react-bootstrap';

class SettingsDelivery extends Component {

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Lägg till ny produkt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={this.props.handleSubmit}>
                        <FormGroup>
                            <Field className="b-input" name="name" placeholder="Namn" component="input" type="text" required/>
                        </FormGroup>
                        <FormGroup>
                            <Field className="b-input" name="image" placeholder="Bild" component="input" type="text" required/>
                        </FormGroup>
                        <FormGroup>
                            <Field className="b-input" name="description" placeholder="Beskrivning" component="input" type="text" required/>
                        </FormGroup>
                        <FormGroup>
                            <Field className="b-input" name="price" placeholder="Pris" component="input" type="number" required/>
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

SettingsDelivery = reduxForm({
    form: 'NewProductForm' // a unique name for this form
})(SettingsDelivery);

export default (SettingsDelivery);