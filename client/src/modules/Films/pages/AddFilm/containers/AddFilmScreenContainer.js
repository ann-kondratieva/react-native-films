import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Reactotron from 'reactotron-react-native';

import AddFilmScreen from '../views/AddFilmScreen';
import userSelectors from '../../../../Auth/selectors';
import { ADD_FILM_FORM } from '../constants';
import addFilmActionCreators from '../actions';
import selectors from '../selectors';
import { uploadToCloud } from '../../../../../services/firebase';
import reactotronReactNative from 'reactotron-react-native';

class AddFilmScreenContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(film) {
        const { actions: { saveFilmsRequest }, user, image } = this.props;
        const imageUrl = await uploadToCloud({ ...image, user });
        reactotronReactNative.log(imageUrl);
        film.user = user._id;
        film.image = imageUrl;
        saveFilmsRequest({ film });
    }

    render() {
        const { navigation, isLoading } = this.props;
        const { goBack } = navigation;
        const props = {
            form: ADD_FILM_FORM,
            onSubmit: this.handleSubmit,
            isLoading,
            title: 'Add Film',
            goBack
        };
        return (
            <React.Fragment>
                <AddFilmScreen {...props} />
            </React.Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state),
        image: selectors.getImage(state),
        isLoading: selectors.isLoading(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(addFilmActionCreators, dispatch),
    };
}

AddFilmScreenContainer.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired
    }),
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    image: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFilmScreenContainer);
