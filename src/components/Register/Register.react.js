import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Form, FormControl,FormGroup, Col } from 'react-bootstrap';
import * as authActions from '../../actions/authActions';

import RegisterHeader from './RegisterHeader.react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };

        this.registerUser = this.registerUser.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    registerUser(e) {
        e.preventDefault();
        this.props.registerUser(this.state.name, this.state.email, this.state.password);
    }
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }
    handlePasswordChange (e) {
        this.setState({password: e.target.value});
    }
    render() {
        return (
            <div>
                <RegisterHeader />
                <Grid>
                    <Col md={4} mdOffset={4}>
                        <Form horizontal onSubmit={this.registerUser}>
                            <FormGroup controlId="formHorizontalEmail">
                                <FormControl type="Bolagsnamn" placeholder="Bolagsnamn" required onChange={this.handleNameChange}/>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <FormControl type="email" placeholder="Email" required onChange={this.handleEmailChange}/>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalPassword">
                                <FormControl type="password" placeholder="Password" required onChange={this.handlePasswordChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit">
                                    Registrera
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
        registerUser: (name, email, password) => dispatch(authActions.registerUser(name, email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);