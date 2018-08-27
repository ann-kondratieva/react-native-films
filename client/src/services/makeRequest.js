import axios from './axios';

export default async function (config) {
    const response = await axios(config);
    return response;
}