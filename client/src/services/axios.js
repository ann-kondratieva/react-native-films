import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    //baseURL: 'https://react-films2.herokuapp.com/',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;