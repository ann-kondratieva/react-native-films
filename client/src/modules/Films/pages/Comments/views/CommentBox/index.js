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
import CommentRow from '../CommentRow';
import Reactotron from 'reactotron-react-native';
import { Container } from 'native-base';
import { colors } from '../../../../../../constants';

const CommentBox = ({ comments, handleCommentSubmit, isRefreshing, onRefresh }) => {
    const formProps = {
        form: COMMENT_FORM,
        onSubmit: handleCommentSubmit
    };
    return (
        <Container style={styles.root}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                        colors={[colors.primary, colors.secondary]}
                    />
                }
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
            <View style={styles.form}>
                <CommentForm {...formProps} />
            </View>
        </Container>

    );
};

CommentBox.propTypes = {
    comments: PropTypes.array,
    handleCommentSubmit: PropTypes.func.isRequired,
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default CommentBox;