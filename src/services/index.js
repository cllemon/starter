import axios from 'axios';
import constants from '@/utils/constants';

// 使用自定义配置新建一个 axios 实例
const instance = axios.create(constants.AXIOS_DEFAULT_OPTIONS);

// 请求拦截器
instance.interceptors.request.use(
  AxiosRequsetConfig => AxiosRequsetConfig, // 在发送请求之前做些什么
  error => Promise.reject(error), // 对请求错误做些什么
);

// 响应拦截器
instance.interceptors.response.use(
  AxiosResponse => AxiosResponse, // 对响应数据做点什么
  error => Promise.reject(error), // 对响应错误做点什么, 如，处理一些鉴权类问题
);

export default function(options = {}, customConfig = {}) {
  return new Promise((resolve, reject) => {
    const finalConfig = Object.assign(options, customConfig);
    instance(finalConfig)
      .then(({ data }) => {
        if (data) {
          return resolve(data);
        }
        return reject(new Error('Request return result exception!'));
      })
      .catch(reason => reject(reason));
  });
}
