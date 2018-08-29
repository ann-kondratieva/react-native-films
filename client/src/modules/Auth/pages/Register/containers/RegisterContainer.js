/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import registerActionCreators from '../actions';
import { REGISTER_FORM } from '../constants';
import createValidator from '../../../../../services/createValidator';
import { registerSchema } from '../constants';
import RegisterScreen from '../views/RegisterScreen';
import { Container } from 'native-base';
import ModalWindow from '../../../../../components/Modal';
import registerSelectors from '../selectors';

class RegisterContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSignInClick = this.onSignInClick.bind(this);
    }

    onSignInClick() {
        const { redirectToSignIn } = this.props.actions;
        redirectToSignIn();
    }

    handleSubmit({ username, email, password }) {
        const { registerRequest } = this.props.actions;
        const userData = {
            username,
            email,
            password
        };
        registerRequest(userData);
    }

    render() {
        const { isLoading } = this.props;
        const props = {
            onSubmit: this.handleSubmit,
            form: REGISTER_FORM,
            validate: createValidator(registerSchema),
            onSignInClick: this.onSignInClick,
            isLoading
        };
        return (
            <Container>
                <ModalWindow />
                <RegisterScreen {...props} />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: registerSelectors.isLoading(state)
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(registerActionCreators, dispatch),
    };
}


RegisterContainer.propTypes = {
    navigation: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
