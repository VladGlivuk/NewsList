import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    ['x-api-key']: process.env.NEXT_PUBLIC_API_KEY,
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
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
    return res;
  },
  async (error) => {
    console.log(error);
  }
);

const API = instance;

export { API };
