import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFormValues } from 'redux-form';

import { SORT_FORM } from '../constants';
import filmsActionCreators from '../actions';
import SortForm from '../views/SortForm';
import reactotronReactNative from 'reactotron-react-native';

class PickerContainer extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const { actions: { applyFormChange } } = this.props;
        applyFormChange();
    }

    render() {
        const { sortForm, clampedScroll } = this.props;
        const props = {
            onSubmit: this.onSubmit,
            form: SORT_FORM,
            selectedValue: sortForm ? sortForm.sortBy : null,
            clampedScroll
        };
        return (
            <SortForm {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        sortForm: getFormValues(SORT_FORM)(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmsActionCreators, dispatch)
    };
}

PickerContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    sortForm: PropTypes.object,
    clampedScroll: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PickerContainer);