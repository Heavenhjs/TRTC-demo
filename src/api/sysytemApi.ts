// eslint-disable-next-line max-classes-per-file
import { AxiosResponse } from 'axios';
import axios from '../utils/axios';

class param {
  username!: string;

  password!: string;
}
class result {
  username!: string;

  password!: string;

  logintime!: string;
}

declare module 'axios' {
  // eslint-disable-next-line no-shadow
  interface AxiosResponse {
    errorinfo: null;
    result: result;
  }
  // eslint-disable-next-line import/prefer-default-export
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

export function login(params: param): Promise<AxiosResponse<any, any>> {
  // 向后台发送post请求
  // Springboot版本
  // return axios.post('/tansci/user/trtclogin', params);
  // Mock版本
  console.log('login');
  return axios.post('api/mytansci/trtclogin', params);
}
//
