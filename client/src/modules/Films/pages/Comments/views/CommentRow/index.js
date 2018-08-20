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

const CommentRow = ({ comment }) => {
    return (
        <View style={styles.container} key={comment.createdAt}>
            <Image style={styles.image} source={{ uri: 'https://loremflickr.com/320/240' }} />
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.name}>{comment.userName}</Text>
                    <Text style={styles.time}>
                        <Moment element={Text} format="YYYY/MM/DD HH:mm">{comment.createdAt}</Moment>
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{comment.message}</Text>
                </View>
            </View>
        </View>

    );
};

CommentRow.propTypes = {
    comment: PropTypes.object.isRequired
};

export default CommentRow;