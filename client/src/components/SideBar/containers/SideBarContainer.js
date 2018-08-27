import React, { Component } from 'react';
//import Reactotron from 'reactotron-react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import authActionCreators from '../../../modules/Auth/actions';
import Sidebar from '../views/SideBar';
import userSelectors from '../../../modules/Auth/selectors';
import { navigate } from '../../../services/navigationService';
import reactotronReactNative from 'reactotron-react-native';

class SideBarContainer extends Component {

    constructor(props) {
        super(props);
        this.onLogOut = this.onLogOut.bind(this);
        this.onNavigateClick = this.onNavigateClick.bind(this);
    }

    onLogOut() {
        const { logout } = this.props.actions;
        logout();
    }

    onNavigateClick(route) {
        const { navigation: { closeDrawer } } = this.props;
        closeDrawer();
        navigate(route);
    }

    render() {
        const { user: { username, avatar }, navigation: { closeDrawer } } = this.props;
        const props = {
            onLogOut: this.onLogOut,
            onClose: closeDrawer,
            username,
            avatar,
            onNavigateClick: this.onNavigateClick
        };
        return (
            <Sidebar {...props} />
        );
    }
}

SideBarContainer.propTypes = {
    actions: PropTypes.shape({
        logout: PropTypes.func.isRequired
    }),
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    navigation: PropTypes.shape({
        closeDrawer: PropTypes.func.isRequired
    }),
};

function mapStateToProps(state) {
    return {
        user: userSelectors.getUser(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActionCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);