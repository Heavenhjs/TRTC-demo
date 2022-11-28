import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
  (config: AxiosRequestConfig) => config,
  (error: any) => {
    Promise.reject(error);
  },
);
service.interceptors.response.use(
  async (response: AxiosResponse) => response,
  (error: any) => {
    Promise.reject(error);
  },
);
export default service;
