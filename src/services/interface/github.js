import network from '../index';

/**
 * @desc 搜索仓库
 *
 * @param {Object} data 请求参数
 * @returns {Promise}
 */
export const searchRepositories = (data = {}) =>
  network({
    url: '/search/repositories',
    params: data,
  });

/**
 * @desc 创建一个项目卡
 *
 * @param {Object} data 请求参数
 * @returns {Promise}
 */
export const createProjectCard = (data = {}) =>
  network({
    method: 'post',
    url: '/projects/columns/:column_id/cards',
    data,
  });

export default {};
