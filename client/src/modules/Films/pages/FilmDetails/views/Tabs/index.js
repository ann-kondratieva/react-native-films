import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { Tab, Tabs, Content } from 'native-base';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import FilmData from '../FilmData';
import Gallery from '../../../../../../components/Gallery';
import { colors } from '../../../../../../constants';
import { robotoWeights } from 'react-native-typography';
import CommentTab from '../CommentTab';

const TabsView = ({ film, openComments }) => {
    return (
        <Tabs tabContainerStyle={styles.container} tabBarUnderlineStyle={styles.underline}>
            <Tab heading="INFO" tabStyle={styles.item} textStyle={styles.text} activeTextStyle={styles.textActive} activeTabStyle={styles.itemActive}>
                <FilmData film={film} />
            </Tab>
            <Tab heading="GALLERY" tabStyle={styles.item} textStyle={styles.text} activeTextStyle={styles.textActive} activeTabStyle={styles.itemActive}>
                <Gallery images={film ? film.images : []} />
            </Tab>
            <Tab heading="COMMENTS" tabStyle={styles.item} textStyle={styles.text} activeTextStyle={styles.textActive} activeTabStyle={styles.itemActive}>
                <CommentTab comments={film ? film.comments : []} openComments={openComments} />
            </Tab>
        </Tabs>
    );
};

TabsView.propTypes = {
    film: PropTypes.object,
    openComments: PropTypes.func.isRequired,
};

export default TabsView;
