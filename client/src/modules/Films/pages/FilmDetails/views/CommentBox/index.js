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

import CommentRow from '../CommentRow';

import reactotronReactNative from 'reactotron-react-native';

const CommentBox = ({ comments, openComments }) => {
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

CommentBox.propTypes = {
    comments: PropTypes.array,
    openComments: PropTypes.func.isRequired,
};

export default CommentBox;