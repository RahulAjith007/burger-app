import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-617e1.firebaseio.com/'
});

export default instance;