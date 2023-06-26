import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    ['x-api-key']: process.env.NEXT_PUBLIC_API_KEY,
  },
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
  async (req) => {
    return req;
  },

  (error) => {
    console.log(error);
  }
);

instance.interceptors.response.use(
  async (res) => {
    // to see response
    console.log('API response', res);
    return res;
  },
  async (error) => {
    // to see error
    console.log(error);
  }
);

const API = instance;

export { API };
