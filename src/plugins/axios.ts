import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://stageapigateway.arvanex.com/api/',
  timeout: 30000,
});

export default axios;
