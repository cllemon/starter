/**
 * @desc mock 服务代理配置
 */
const MOCK_SERVER_PROXY = {
  '/search/*': {
    target: 'http://localhost:3001/$1',
  }
}

/**
 * @desc 默认服务代理
 */
const DEFAULT_PROXY = {};

/**
 * @desc dev-server 代理配置
 * @param {Boolean} IS_MOCK mock 标识
 * @param {Object} Proxy
 */
module.exports = function({ IS_MOCK }) {
  if (IS_MOCK) return MOCK_SERVER_PROXY;
  return DEFAULT_PROXY;
}
