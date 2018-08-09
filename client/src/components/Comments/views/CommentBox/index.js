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
    KeyboardAvoidingView
} from 'react-native';

import CommentForm from '../CommentForm';
import CommentRow from '../CommentRow';
import { COMMENT_FORM } from '../../constants';
import Reactotron from 'reactotron-react-native';

const CommentBox = ({ comments, handleCommentSubmit }) => {
    const formProps = {
        form: COMMENT_FORM,
        onSubmit: handleCommentSubmit
    };
    return (
        <View style={styles.root}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                ref={(element) => this.scroll = element}
                onContentSizeChange={() => this.scroll.scrollToEnd({ animated: true })}>
                <FlatList
                    contentContainerStyle={styles.container}
                    data={comments}
                    ListEmptyComponent={<View key={'empty'} style={styles.textContainer}><Text style={styles.text}>Be the first to leave a comment</Text></View>}
                    keyExtractor={(item) => {
                        return item.createdAt;
                    }}
                    renderItem={({ item }) => <CommentRow comment={item} key={item} />}
                />
            </ScrollView>
            <CommentForm {...formProps} />
        </View>

    );
};

CommentBox.propTypes = {
    comments: PropTypes.array,
    handleCommentSubmit: PropTypes.func.isRequired,
};

export default CommentBox;