import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { ScrollView } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { Container } from 'native-base';
import AddFilmForm from '../AddFilmForm';
import ImageContainer from '../../containers/ImageContainer';
import { colors } from '../../../../../../constants';
import Loading from '../../../../../../views/Loading';
import PageHeader from '../../../../../../components/Header';

const AddFilmScreen = ({ form, onSubmit, isLoading, title, goBack }) => {
    const formProps = {
        form,
        onSubmit
    };
    const headerProps = {
        title,
        goBack
    };
    return (
        <Container style={styles.root}>
            {isLoading ?
                <LinearGradient colors={[colors.secondary, colors.primary]} style={styles.linearGradient}>
                    <Loading />
                </LinearGradient> :
                <React.Fragment>
                    <PageHeader {...headerProps} />
                    <ScrollView>
                        <ImageContainer />
                        <AddFilmForm {...formProps} />
                    </ScrollView>
                </React.Fragment>
            }

        </Container>
    );
};

AddFilmScreen.propTypes = {
    form: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    goBack: PropTypes.func.isRequired
};

export default AddFilmScreen;