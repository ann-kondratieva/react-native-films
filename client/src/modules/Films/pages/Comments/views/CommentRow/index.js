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
import placeholder from '../../../../../../../userplaceholder.png';

const CommentRow = ({ comment: { createdAt, userAvatar, userName, message } }) => {
    return (
        <View style={styles.container} key={createdAt}>
            <Image style={styles.image} source={userAvatar ? { uri: userAvatar } : placeholder} />
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.name}>{userName}</Text>
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