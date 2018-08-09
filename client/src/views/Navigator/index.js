import React, { Component } from 'react';

import Navigator from '../../services/navigator';
import { setNavigator } from '../../services/navigationService';

class MainNavigator extends Component {

    componentDidMount() {
        setNavigator(this.navigator);
    }

    render() {
        return (
            <Navigator ref={nav => { this.navigator = nav; }} />
        );
    }

};

export default MainNavigator;