import axios from 'axios';

const instance = axios.create({
    // api (cloud functions) URL
    baseURL: "https://us-central1-clone-b271c.cloudfunctions.net/api"
    // "http://localhost:5001/clone-b271c/us-central1/api",
});

export default instance; 