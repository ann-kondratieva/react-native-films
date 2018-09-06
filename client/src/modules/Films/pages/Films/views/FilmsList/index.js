import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, Text, View, Animated } from 'react-native';
import ScrollUp from 'react-native-scroll-up';

import FilmsListItem from '../FilmListItem';
import { colors } from '../../../../../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ListFooter from '../ListFooter';
import reactotronReactNative from 'reactotron-react-native';
import { SERVICE_HEIGHT } from '../../constants';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FilmsList = ({ items, loadMore, hasMore, onClick, isRefreshing, onRefresh, isLoading, isFabVisible, scrollAnim, handleOnScroll,
    _onMomentumScrollBegin, _onMomentumScrollEnd, _onScrollEndDrag, onScroll }) => {
    return (
        <React.Fragment>
            <AnimatedFlatList
                ListFooterComponent={<ListFooter isLoading={isLoading} isRefreshing={isRefreshing} hasMore={hasMore} itemsLength={items.length} />}
                ListEmptyComponent={<View style={styles.textContainer}><Text style={styles.text}>Nothing to show :( </Text></View>}
                ref={scrollView => {
                    this.scrollView = scrollView;
                }}
                onMomentumScrollBegin={_onMomentumScrollBegin}
                onMomentumScrollEnd={_onMomentumScrollEnd}
                onScrollEndDrag={_onScrollEndDrag}
                scrollEventThrottle={1}
                onScroll={onScroll}
                contentContainerStyle={styles.container}
                data={items}
                numColumns={2}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <FilmsListItem item={item} onClick={onClick} />}
                onEndReached={hasMore ? loadMore : null}
                onEndReachedThreshold={0.8}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                        colors={[colors.primary, colors.secondary]}
                        progressViewOffset={SERVICE_HEIGHT + 30}
                    />
                }
            />
            <ScrollUp
                refView="FlatList"
                root={this.scrollView ? this.scrollView.getNode() : null}
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
    isRefreshing: PropTypes.bool.isRequired,
    loadMore: PropTypes.func.isRequired,
    onRefresh: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hasMore: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    handleOnScroll: PropTypes.func.isRequired,
    isFabVisible: PropTypes.bool.isRequired,
    scrollAnim: PropTypes.object.isRequired,
    _onMomentumScrollBegin: PropTypes.func.isRequired,
    _onMomentumScrollEnd: PropTypes.func.isRequired,
    _onScrollEndDrag: PropTypes.func.isRequired,
};

export default FilmsList;
