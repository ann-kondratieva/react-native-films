import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'native-base';
import Reactotron from 'reactotron-react-native';
//import { getFormValues } from 'redux-form';

import PageHeader from '../views/Header';
import FilmsListContainer from './FilmsListContainer';


class FilmsContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation: { openDrawer } } = this.props;
        const headerProps = {
            title: 'Movies',
            openDrawer
        };
        return (
            <Container>
                <PageHeader {...headerProps} />
                <FilmsListContainer />
            </Container>

        );
    }
};


/* function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmsActionCreators, dispatch),
    };
} */

FilmsContainer.propTypes = {
    navigation: PropTypes.shape({
        closeDrawer: PropTypes.func.isRequired
    }),
};

export default /* connect(null, mapDispatchToProps)( */FilmsContainer;
