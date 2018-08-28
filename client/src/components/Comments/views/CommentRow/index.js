import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Moment from 'react-moment';
import placeholder from '../../../../../userplaceholder.png';
import reactotronReactNative from 'reactotron-react-native';

const CommentRow = ({ comment }) => {
    const { createdAt, user, message } = comment;
    return (
        <View style={styles.container} key={createdAt}>
            <Image style={styles.image} source={user.avatar ? { uri: user.avatar } : placeholder} />
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.name}>{user ? user.username : ''}</Text>
                    <Text style={styles.time}>
                        <Moment element={Text} format="YYYY/MM/DD HH:mm">{createdAt}</Moment>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{message}</Text>
                </View>
            </View>
        </View>

    );
};

CommentRow.propTypes = {
    comment: PropTypes.object.isRequired
};

export default CommentRow;