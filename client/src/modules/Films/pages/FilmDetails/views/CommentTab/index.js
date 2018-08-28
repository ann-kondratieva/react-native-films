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
import { Button, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import reactotronReactNative from 'reactotron-react-native';
import CommentBox from '../../../../../../components/Comments';

const CommentTab = ({ comments, openComments, isRefreshingComments, onRefresh }) => {
    return (
        <View style={styles.root}>
            <CommentBox comments={comments} isRefreshing={isRefreshingComments} onRefresh={() => onRefresh(true)} />
            <Fab
                containerStyle={{}}
                style={styles.fab}
                position="bottomRight"
                onPress={openComments}>
                <Icon name="bubbles" />
            </Fab>
        </View>

    );
};

CommentTab.propTypes = {
    comments: PropTypes.array,
    openComments: PropTypes.func.isRequired,
    isRefreshingComments: PropTypes.bool.isRequired,
    onRefresh: PropTypes.func.isRequired,
};

export default CommentTab;