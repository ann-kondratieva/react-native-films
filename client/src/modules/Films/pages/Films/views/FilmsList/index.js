import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import Reactotron from 'reactotron-react-native';
import ScrollUp from 'react-native-scroll-up';

import FilmsListItem from '../FilmListItem';
import { colors } from '../../../../../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ListFooter from '../ListFooter';

const FilmsList = ({ items, loadMore, hasMore, onClick, refreshing, onRefresh, isFabVisible, handleOnScroll, loading }) => {
    return (
        <React.Fragment>
            <FlatList
                ListFooterComponent={<ListFooter isLoading={loading} isRefreshing={refreshing} hasMore={hasMore} />}
                ListEmptyComponent={<View style={styles.textContainer}><Text style={styles.text}>Nothing to show :( </Text></View>}
                ref={scrollview => {
                    this.scrollview = scrollview;
                }}
                onScroll={event => handleOnScroll(event)}
                contentContainerStyle={styles.container}
                data={items}
                numColumns={2}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <FilmsListItem item={item} onClick={onClick} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.8}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.primary, colors.secondary]}
                    />
                }
            />
            <ScrollUp
                refView="FlatList"
                root={this.scrollview}
                type="icon"
                icon={<Icon size={24} name="arrow-up" style={styles.arrow} />}
                backgroundColor={colors.primary}
                visible={isFabVisible}
                width={55}
                height={55}
            />
        </React.Fragment>
    );
};

FilmsList.propTypes = {
    items: PropTypes.array.isRequired,
    refreshing: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
    isFabVisible: PropTypes.bool.isRequired,
    handleOnScroll: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FilmsList;
