import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as productsActions from '../../../actions/productsActions';

import ModalNewProductForm from './ModalNewProductForm.react';

import { Col, Well, Button, ButtonToolbar, Panel } from 'react-bootstrap';

class Products extends Component {

    constructor(props){
        super(props);
        this.state = {
            modalNewProductForm: false
        };
    }

    componentWillMount() {
        if (this.props.uid) {
            this.props.getProducts(this.props.uid);
        }
    }

    addProduct = (values) => {
        console.log("addProduct", values);
        this.props.addProduct(this.props.auth.uid, values);
        this.setState({ modalNewProductForm: false });
    };

    render() {
        let modalNewProductForm = () => this.setState({ modalNewProductForm: false });

        let productList = null;
        let products = this.props.products;
        if (products) {
            productList = Object.keys(products).map(product => {
                return (
                    <Col md={4} key={product}>
                        <Panel header={products[product].name} eventKey={product}>
                            <p>{products[product].description || 'No description'}</p>
                            <p>{products[product].price || 'No price'}</p>
                            <img src={products[product].image} height="50px" width="50px" alt={products[product].title}/>
                            <p></p>
                            <ButtonToolbar>
                                <Button bsSize="xsmall" bsStyle="danger">Delete</Button>
                                <Button bsSize="xsmall" bsStyle="primary">Edit</Button>
                            </ButtonToolbar>
                        </Panel>
                    </Col>
                )
            });
        }
        return (
            <div>
                <ModalNewProductForm onSubmit={this.addProduct} show={this.state.modalNewProductForm} onHide={modalNewProductForm} />
                <Col xs={12} md={12}>
                    <Well>
                        <h4>Produkter</h4>
                        <Button bsStyle="default" onClick={()=>this.setState({ modalNewProductForm: true })}>+ Ny produkt</Button>
                    </Well>
                </Col>
                <Col xs={12} md={12}>
                    {productList}
                </Col>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        uid: state.auth.uid,
        products: state.products
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