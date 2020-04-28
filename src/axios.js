import axios from 'axios';

const request = axios.create({
  baseURL:
    process.env.NODE_ENV === 'LOCAL'
      ? 'http://localhost:3000/'
      : 'https://yapi.cai-inc.com/mock/1816',
});

export default request;
