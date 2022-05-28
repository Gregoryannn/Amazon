import axios from 'axios';

const instance = axios.create({
    // api (cloud functions) URL
    baseURL: "http://localhost:5001/clone-b271c/us-central1/api",
});

export default instance; 