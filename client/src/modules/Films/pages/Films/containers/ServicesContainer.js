import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SERVICES_FORM } from '../constants';
import ServicesForm from '../views/ServicesForm';
import filmsActionCreators from '../actions';

class ServicesContainer extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const { actions: { applyFormChange } } = this.props;
        applyFormChange();
    }

    render() {
        const props = {
            onSubmit: this.onSubmit,
            form: SERVICES_FORM
        };
        return (
            <ServicesForm {...props} />
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmsActionCreators, dispatch)
    };
}

ServicesContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(ServicesContainer);