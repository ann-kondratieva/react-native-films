import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Reactotron from 'reactotron-react-native';

import selectors from '../../../../../selectros';
import authActionCreators from '../../../actions';
import Loading from '../views/Loading';

class AuthLoadingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { actions, isAuth, navigation } = this.props;
        const { getUserRequest } = actions;
        if (isAuth) {
            getUserRequest();
        }
        navigation.navigate(isAuth ? 'App' : 'Auth');
    }

    render() {
        return (
            <Loading />
        );
    }
}

AuthLoadingContainer.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        isAuth: selectors.isAuth(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingContainer);