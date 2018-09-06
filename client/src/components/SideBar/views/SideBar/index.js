import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import Theme from 'react-native-theming';

import styles from './styles';
import { Content, List, ListItem, Left, Body, Right, Header, Button } from 'native-base';
import { View, Text, StatusBar } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';
import { colors } from '../../../../constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import placeholder from '../../../../../userplaceholder.png';

const Sidebar = ({ onLogOut, onClose, username, onNavigateClick, avatar }) => {
    return (
        <Theme.View style={styles.container}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.primary, colors.secondary]} style={styles.linearGradient}>
                <View style={styles.serviceBar} >

                    <Button style={styles.backButton} transparent onPress={onClose}>
                        <Icon size={23} color='white' name='arrow-left' />
                    </Button>

                </View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => onNavigateClick('Profile')}>
                        <Image source={avatar ? { uri: avatar } : placeholder}
                            style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Hi, {username}!</Text>
                </View>
            </LinearGradient>
            <List style={styles.list}>
                <ListItem icon style={styles.item} onPress={() => onNavigateClick('Films')}>
                    <Left>
                        <Icon style={styles.icon} size={23} name="home" />
                    </Left>
                    <Body style={styles.noUnderline}>
                        <Text style={styles.itemText}>Home</Text>
                    </Body>
                </ListItem>
                <ListItem icon style={styles.item} onPress={() => onNavigateClick('AddFilm')}>
                    <Left>
                        <Icon style={styles.icon} size={23} name="plus" />
                    </Left>
                    <Body style={styles.noUnderline}>
                        <Text style={styles.itemText}>Add Film</Text>
                    </Body>
                </ListItem>
                <ListItem icon style={styles.item} onPress={() => onNavigateClick('Profile')}>
                    <Left>
                        <Icon style={styles.icon} size={23} name="user" />
                    </Left>
                    <Body style={styles.noUnderline}>
                        <Text style={styles.itemText}>Profile</Text>
                    </Body>
                </ListItem>
                <ListItem icon style={styles.item} onPress={onLogOut} >
                    <Left>
                        <Icon style={styles.icon} size={22} name="logout" />
                    </Left>
                    <Body style={styles.noUnderline}>
                        <Text style={styles.itemText}>Log Out</Text>
                    </Body>
                </ListItem>
            </List>
        </Theme.View>
    );
};

Sidebar.propTypes = {
    onLogOut: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onNavigateClick: PropTypes.func.isRequired,
    username: PropTypes.string,
    avatar: PropTypes.string,
};

export default Sidebar;