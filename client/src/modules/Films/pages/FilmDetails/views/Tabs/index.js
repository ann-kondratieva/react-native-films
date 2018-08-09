import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Tab, Tabs, Content } from 'native-base';
import { View } from 'react-native';
import styles from './styles';
import FilmData from '../FilmData';
import Gallery from '../../../../../../components/Gallery';
import Comments from '../../../../../../components/Comments';

const TabsView = ({ film, handleCommentSubmit }) => {
    return (
        <Tabs tabBarUnderlineStyle={styles.underline} tabContainerStyle={styles.container}>
            <Tab heading="INFO" tabStyle={styles.item} textStyle={styles.text} activeTextStyle={styles.textActive} activeTabStyle={styles.itemActive}>
                <FilmData film={film} />
            </Tab>
            <Tab heading="GALLERY" tabStyle={styles.item} textStyle={styles.text} activeTextStyle={styles.textActive} activeTabStyle={styles.itemActive}>
                <Gallery images={film ? film.images : []} />
            </Tab>
            <Tab heading="COMMENTS" tabStyle={styles.item} textStyle={styles.text} activeTextStyle={styles.textActive} activeTabStyle={styles.itemActive}>
                <Comments comments={film ? film.comments : []} handleCommentSubmit={handleCommentSubmit} />
            </Tab>
        </Tabs>
    );
};

TabsView.propTypes = {
    film: PropTypes.object,
    handleCommentSubmit: PropTypes.func.isRequired,
};

export default TabsView;