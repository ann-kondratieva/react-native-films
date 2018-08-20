import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SEARCH_FORM } from '../constants';
import filmsActionCreators from '../actions';
import SearchHeader from '../views/SearchHeader';
import { Dimensions, Animated } from 'react-native';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.marginLeft = new Animated.Value(0);
    }

    componentDidMount() {
        this.openAnimate();
    }

    openAnimate() {
        const { width } = Dimensions.get('window');
        this.marginLeft.setValue(width);
        Animated.timing(
            this.marginLeft,
            {
                toValue: 0,
                duration: 250
            }
        ).start();
    }

    onSubmit() {
        const { actions: { applyFormChange } } = this.props;
        applyFormChange();
    }

    onReset() {
        const { actions: { resetAndUpdateList } } = this.props;
        resetAndUpdateList();
    }

    render() {
        const { closeSearch } = this.props;
        const props = {
            onSubmit: this.onSubmit,
            onReset: this.onReset,
            form: SEARCH_FORM,
            closeSearch,
            marginLeft: this.marginLeft
        };
        return (
            <SearchHeader {...props} />
        );
    }
};


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmsActionCreators, dispatch)
    };
}

SearchContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    closeSearch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchContainer);