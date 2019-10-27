const AXIOS_DEFAULT_OPTIONS = {
  baseURL: process.env.BASE_URL, // 基础域名地址 webpack 配置
  method: 'get', // 创建请求时使用的方法
  timeout: 1000 * 15, // 过期时间，15秒
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }, // 自定义请求头
};

export default {
  AXIOS_DEFAULT_OPTIONS,
};
