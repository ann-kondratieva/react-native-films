import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../../../../../constants';
import placeholder from '../../../../../../../userplaceholder.png';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Button } from 'native-base';
import UsernameForm from '../UsernameForm';

const Username = ({ username, onUsernamePress, isShowingEdit, isEditing, onSubmit, form, onClose, onEditPress }) => {
    const formProps = {
        onSubmit,
        form,
        username,
        onClose
    };
    return (
        <View style={styles.container} >
            {isEditing ?
                <View style={styles.formContainer}>
                    <Text style={styles.username}>@</Text><UsernameForm {...formProps} />
                </View> :
                <View style={styles.usernameContainer}>
                    <TouchableOpacity onPress={onUsernamePress}>
                        <Text style={styles.username}>@{username} </Text>
                    </TouchableOpacity>
                    {isShowingEdit &&
                        <Button style={styles.editButton} transparent onPress={onEditPress} >
                            <Icon size={18} color='white' name='pencil' />
                        </Button>}
                </View>}

        </View>
    );
};

Username.propTypes = {
    username: PropTypes.string,
    onUsernamePress: PropTypes.func.isRequired,
    isShowingEdit: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    form: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditPress: PropTypes.func.isRequired,
};

export default Username;