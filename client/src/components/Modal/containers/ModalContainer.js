import React, { Component } from 'react';
//import Reactotron from 'reactotron-react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import userSelectors from '../../../modules/Auth/selectors';
import Modal from '../views/Modal';
import modalActionCreators from '../actions';

class ModalContainer extends Component {

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        const { closeModal } = this.props.actions;
        closeModal();
    }

    render() {
        const { error } = this.props;
        const props = {
            onClose: this.onClose,
            message: error,
            isVisible: error ? true : false
        };
        return (
            <Modal {...props} />
        );
    }
}

ModalContainer.propTypes = {
    error: PropTypes.string,
    actions: PropTypes.shape({
        closeModal: PropTypes.func.isRequired
    })
};

function mapStateToProps(state) {
    return {
        error: userSelectors.getError(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(modalActionCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);