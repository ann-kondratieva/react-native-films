import React, { Component } from 'react';
//import Reactotron from 'reactotron-react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import loginActionCreators from '../actions';
import { LOGIN_FORM } from '../constants';
import createValidator from '../../../../../services/createValidator';
import { loginSchema } from '../constants';
import { Container } from 'native-base';
import LoginScreen from '../views/LoginScreen';
import ModalWindow from '../../../../../components/Modal';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSignUpClick = this.onSignUpClick.bind(this);
    }

    handleSubmit({ email, password }) {
        const { loginRequest } = this.props.actions;
        const userData = {
            email,
            password
        };
        loginRequest(userData);
    }

    onSignUpClick() {
        const { redirectToSignUp } = this.props.actions;
        redirectToSignUp();
    }

    render() {
        const props = {
            onSubmit: this.handleSubmit,
            form: LOGIN_FORM,
            validate: createValidator(loginSchema),
            onSignUpClick: this.onSignUpClick
        };
        return (
            <Container>
                <ModalWindow />
                <LoginScreen {...props} />
            </Container>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActionCreators, dispatch),
    };
}


LoginContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(LoginContainer);
