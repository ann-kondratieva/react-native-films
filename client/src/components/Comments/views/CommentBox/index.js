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

import CommentRow from '../CommentRow';
import Reactotron from 'reactotron-react-native';
import { Container } from 'native-base';
import { colors } from '../../../../constants';

const CommentBox = ({ comments, isRefreshing, onRefresh }) => {
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={onRefresh}
                    colors={[colors.primary, colors.secondary]}
                    progressViewOffset={-20}
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

    );
};

CommentBox.propTypes = {
    comments: PropTypes.array,
    isRefreshing: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default CommentBox;