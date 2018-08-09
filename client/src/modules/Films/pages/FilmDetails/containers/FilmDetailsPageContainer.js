import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filmActionCreators from '../actions';
import selectors from '../selectors';
import Reactotron from 'reactotron-react-native';
import PageHeader from '../views/Header';
import FilmContainer from './FilmContainer';

class FilmDetailsPageContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { navigation, actions: { getFilmRequest } } = this.props;
        const id = navigation.getParam('id', null);
        getFilmRequest({ id });
    }

    render() {
        const { filmState: { item, loading }, navigation: { goBack } } = this.props;
        const props = {
            film: item,
            loading,
        };
        const headerProps = {
            title: item ? item.title : '',
            goBack
        };
        return (
            <React.Fragment>
                <PageHeader {...headerProps} />
                <FilmContainer {...props} />
            </React.Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        filmState: selectors.getFilmState(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch),
    };
}

FilmDetailsPageContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    filmState: PropTypes.object.isRequired,
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    }),
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsPageContainer);