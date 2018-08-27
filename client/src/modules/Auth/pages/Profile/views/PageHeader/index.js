import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import { Title, Button, View } from 'native-base';
import styles from './styles';
import { colors } from '../../../../../../constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const PageHeader = ({ goBack }) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
            <View style={styles.header}>
                <View style={styles.leftHeader}>
                    <Button transparent style={styles.menuButton} onPress={() => goBack()}>
                        <Icon name='arrow-left' size={23} color='white' />
                    </Button>
                    <Title style={styles.title}>My Profile</Title>
                </View>

                <View>
                    <Button transparent style={styles.settingsButton}>
                        <Icon name='settings' size={23} color='white' />
                    </Button>
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