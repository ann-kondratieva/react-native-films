import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'native-base';
import { View } from 'react-native';

import MainHeader from '../views/MainHeader';
import FilmsListContainer from './FilmsListContainer';
import filmsActionCreators from '../actions';
import filmSelectors from '../selectors';
import PickerContainer from './PickerContainer';

class FilmsContainer extends Component {

    constructor(props) {
        super(props);
        this.openSearch = this.openSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
    }

    openSearch() {
        const { actions: { openSearch } } = this.props;
        openSearch();
    }

    closeSearch() {
        const { actions: { closeSearch } } = this.props;
        closeSearch();
    }

    render() {
        const { navigation: { openDrawer }, isSearching } = this.props;
        const headerProps = {
            title: 'Movies',
            openDrawer,
            isSearching,
            openSearch: this.openSearch,
            closeSearch: this.closeSearch
        };
        return (
            <React.Fragment>
                <MainHeader {...headerProps} />

                <FilmsListContainer />
            </React.Fragment>

        );
    }
};

function mapStateToProps(state) {
    return {
        isSearching: filmSelectors.isSearching(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmsActionCreators, dispatch),
    };
}

FilmsContainer.propTypes = {
    navigation: PropTypes.shape({
        openDrawer: PropTypes.func.isRequired
    }),
    isSearching: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
        openSearch: PropTypes.func.isRequired,
        closeSearch: PropTypes.func.isRequired,
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);
