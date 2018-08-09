import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Header, Left, Body, Right, Title, Button, Text, View } from 'native-base';
import styles from './styles';
import { colors } from '../../../../../../constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const PageHeader = ({ title, goBack }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
            <View style={styles.header}>
                <View>
                    <Button transparent style={styles.menuButton} onPress={() => goBack()}>
                        <Icon name='arrow-left' size={23} color='white' />
                    </Button>
                </View>
                <View>
                    <Title style={styles.title}>{title}</Title>
                </View>
            </View>
        </LinearGradient>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string,
    goBack: PropTypes.func.isRequired,
};

export default PageHeader;