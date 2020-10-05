import axios from 'axios';

const client = axios.create();

// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = 'http://localhost:4000';
// client.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem(
//   'accessToken'
// )}`;
export default client;
