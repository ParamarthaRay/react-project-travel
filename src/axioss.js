// import axios from 'axios';

import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend base URL
});

export default instance;
