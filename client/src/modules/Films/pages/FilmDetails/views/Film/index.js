import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ImageHeader from '../ImageHeader';
import { View, Text, ActivityIndicator } from 'react-native';
import { colors } from '../../../../../../constants';
import { Container, Content } from 'native-base';
import Reactotron from 'reactotron-react-native';

import TabsView from '../Tabs';

const Film = ({ film, loading, handleCommentSubmit }) => {
    return (
        <Container style={styles.container}>
            {loading ?
                <ActivityIndicator size="large" style={styles.loader} color={colors.primary} /> :
                <React.Fragment >
                    <ImageHeader image={film.image} />
                    <TabsView handleCommentSubmit={handleCommentSubmit} film={film} />
                </React.Fragment>}
        </Container>
    );
};

Film.propTypes = {
    film: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    handleCommentSubmit: PropTypes.func.isRequired,
};

export default Film;