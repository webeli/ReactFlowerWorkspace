import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as productsActions from '../../../actions/productsActions';

import ModalNewProductForm from './ModalNewProductForm.react';

import { Col, Well, Button } from 'react-bootstrap';

class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalNewProductForm: false
        };
    }

    componentDidMount() {
        if (this.props.auth.uid) {
            this.props.getProducts(this.props.auth.uid);
        }
    }

    addProduct = (values) => {
        console.log("addProduct", values);
        this.props.addProduct(this.props.auth.uid, values);
        this.setState({ modalNewProductForm: false });
    };

    render() {
        let modalNewProductForm = () => this.setState({ modalNewProductForm: false });
        return (
            <div>
                <ModalNewProductForm onSubmit={this.addProduct} show={this.state.modalNewProductForm} onHide={modalNewProductForm} />
                <Col xs={12} md={12}>
                    <Well>
                        <h4>Produkter</h4>
                        <Button bsStyle="default" onClick={()=>this.setState({ modalNewProductForm: true })}>+ Ny produkt</Button>
                    </Well>
                </Col>
                <Col xs={12} md={6}>
                    <Well>
                        Produkter...
                    </Well>
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getProducts: (uid) => dispatch(productsActions.getProducts(uid)),
        addProduct: (uid, data) => dispatch(productsActions.addProduct(uid, data)),
        updateProduct: (uid, data) => dispatch(productsActions.updateProduct(uid, data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);