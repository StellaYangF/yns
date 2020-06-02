import axios from 'axios';
import config from '@/config';
import { getLocal } from './local';

class Http {
  constructor() {
    this.defaultOptions = {
      baseURL: config.baseURL,
      timeout: 3000,
    }
  }

  mergeOptions(options) {
    return {
      ...this.defaultOptions,
      ...options,
    }
  }

  setInterceptors(instance) {
    instance.interceptors.request.use(config => {
      config.headers.authorization = `Bear ${getLocal('token')}`;
      return config;
    })

    instance.interceptors.response.use(response => {
      if (response.status == 200) {
        if (response.data.err == 0) {
          return Promise.resolve(response.data);
        } else {
          return Promise.reject(response.data.data);
        }
      } else {
        return Promise.reject(response.data.data);
      }
    }, err => {
      switch(err.response.status) {
        case '401':
          console.log(err);
          break;
        default:
          break;
      }
      return Promise.reject(err);
    })
  }

  request(options) {
    const instance = axios.create();
    this.setInterceptors(instance);
    const opts = this.mergeOptions(options);
    return instance(opts);
  }

  get(url, config) {
    this.request({
      method: 'get',
      url,
      ...config
    });
  }

  post(url, config) {
    this.request({
      method: 'post',
      url,
      ...config,
    });
  }
}

export default new Http();