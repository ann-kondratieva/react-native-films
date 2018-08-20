import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Text, View, Tab, Tabs, Container, Header, ScrollableTab } from 'native-base';
import { Image, ScrollView } from 'react-native';
import styles from './styles';
import { colors } from '../../../../../../constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import RatingContainer from '../../containers/RatingContainer';

const FilmData = ({ film }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={styles.titleText}>Rating</Text>
                <View style={styles.rating}>
                    <RatingContainer film={film} />
                </View >
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Description</Text>
                <Text style={styles.text}> {film ? film.description : ''}</Text>
            </View>
        </ScrollView>
    );
};

FilmData.propTypes = {
    film: PropTypes.object
};

export default FilmData;
