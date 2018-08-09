import axios from './axios';

export default async function (config) {
    console.log(config);
    const response = await axios(config);
    console.log(response);
    return response;
}