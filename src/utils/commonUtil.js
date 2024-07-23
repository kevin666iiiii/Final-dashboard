import axios from 'axios';

export function readJSON(urlPath) {
    return axios.get(urlPath);
}