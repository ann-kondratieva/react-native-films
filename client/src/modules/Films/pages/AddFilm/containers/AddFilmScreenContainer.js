import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Reactotron from 'reactotron-react-native';
import PageHeader from '../../../../../components/Header';
import AddFilmScreen from '../views/AddFilmScreen';
import userSelectors from '../../../../Auth/selectors';
import { ADD_FILM_FORM } from '../constants';
import addFilmActionCreators from '../actions';

class AddFilmScreenContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(film) {
        const { actions: { saveFilmsRequest }, user } = this.props;
        film.user = user._id;
        saveFilmsRequest({ film });
    }

    render() {
        const { navigation } = this.props;
        const { goBack } = navigation;
        const headerProps = {
            title: 'Add Film',
            goBack
        };
        const props = {
            form: ADD_FILM_FORM,
            onSubmit: this.handleSubmit
        };
        return (
            <React.Fragment>
                <PageHeader {...headerProps} />
                <AddFilmScreen {...props} />
            </React.Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //filmActions: bindActionCreators(filmActionCreators, dispatch),
        actions: bindActionCreators(addFilmActionCreators, dispatch),
    };
}

AddFilmScreenContainer.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    }),
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFilmScreenContainer);
