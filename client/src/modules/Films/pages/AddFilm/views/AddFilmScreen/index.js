import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import {
    ScrollView,
} from 'react-native';

import Reactotron from 'reactotron-react-native';
import { Container } from 'native-base';
import AddFilmForm from '../AddFilmForm';


const AddFilmScreen = ({ form, onSubmit }) => {
    const props = {
        form,
        onSubmit
    };
    return (
        <Container style={styles.root}>
            <AddFilmForm {...props} />
        </Container>
    );
};

AddFilmScreen.propTypes = {
    form: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default AddFilmScreen;