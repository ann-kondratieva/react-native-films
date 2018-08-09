import React, { Component } from 'react';
//import Reactotron from 'reactotron-react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, Text, View } from 'native-base';
import filmsActionCreators from '../Films/actions';


class TestContainer extends Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const { actions: { redirectToFilm } } = this.props;
        redirectToFilm('5b616bdefc80640718e53cc8');
    }

    render() {
        return (
            <View>
                <Text> TEST </Text>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmsActionCreators, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(TestContainer);