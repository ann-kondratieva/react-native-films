import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Username from '../views/Username';
import { USERNAME_FORM } from '../constants';
import profileActionCreators from '../actions';

class UsernameContainer extends Component {

    constructor(props) {
        super(props);

        this.onUsernamePress = this.onUsernamePress.bind(this);
        this.onEditPress = this.onEditPress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClose = this.onClose.bind(this);

        this.state = {
            isShowingEdit: false,
            isEditing: false
        };
    }

    onUsernamePress() {
        this.setState({ isShowingEdit: !this.state.isShowingEdit });
    }

    onEditPress() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    onSubmit({ username }) {
        const { user, actions: { updateUserRequest } } = this.props;
        let updatedUser = JSON.parse(JSON.stringify(user));
        updatedUser.username = username;
        updateUserRequest({ user: updatedUser });
        this.onClose();
    }

    onClose() {
        this.setState({ isEditing: !this.state.isEditing, isShowingEdit: false });
    }

    render() {
        const { user: { username } } = this.props;
        const props = {
            username,
            onUsernamePress: this.onUsernamePress,
            isShowingEdit: this.state.isShowingEdit,
            isEditing: this.state.isEditing,
            onSubmit: this.onSubmit,
            form: USERNAME_FORM,
            onClose: this.onClose,
            onEditPress: this.onEditPress
        };

        return (
            <Username {...props} />
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(profileActionCreators, dispatch),
    };
}

UsernameContainer.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    actions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(UsernameContainer);