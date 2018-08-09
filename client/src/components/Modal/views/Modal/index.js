import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text, Button } from 'native-base';
import styles from './styles';
import Modal from 'react-native-modal';

const ModalWindow = ({ isVisible, onClose, message }) => {
    return (
        <View style={styles.container}>
            <Modal
                backdropOpacity={0.5}
                isVisible={isVisible}
                animationIn={'zoomInDown'}
                animationOut={'zoomOutUp'}
                onBackButtonPress={onClose}
                onBackdropPress={onClose}>
                <View style={styles.modalContent}>
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Sorry, but...</Text>
                        <Text style={styles.modalText}>{message}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button primary style={styles.button} transparent onPress={onClose}>
                            <Text uppercase={false} style={styles.buttonText}>Cancel</Text>
                        </Button>
                    </View>

                </View>
            </Modal>
        </View>
    );
};

ModalWindow.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string,
};

export default ModalWindow;