import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    RefreshControl
} from 'react-native';
import { COMMENT_FORM } from '../../constants';

import CommentForm from '../CommentForm';
import Reactotron from 'reactotron-react-native';
import { Container } from 'native-base';
import CommentBox from '../../../../../../components/Comments';

const CommentScreen = ({ comments, handleCommentSubmit, isRefreshing, onRefresh }) => {
    const formProps = {
        form: COMMENT_FORM,
        onSubmit: handleCommentSubmit
    };
    return (
        <Container style={styles.root}>
            <CommentBox comments={comments} isRefreshing={isRefreshing} onRefresh={onRefresh} />
            <View style={styles.form}>
                <CommentForm {...formProps} />
            </View>
        </Container>

    );
};

CommentScreen.propTypes = {
    comments: PropTypes.array,
    handleCommentSubmit: PropTypes.func.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default CommentScreen;