import React from 'react';

import { Container, Header, Content, Spinner } from 'native-base';
import styles from './styles';

const Loading = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Spinner style={styles.spinner} color='blue' />
            </Content>
        </Container>
    );
};

export default Loading;
