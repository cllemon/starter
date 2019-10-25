import { useState, useEffect } from 'react';

/**
 * @desc 自定义 hooks 专用于请求
 * @todo useEffect 内部实现，待梳理。暂时一律转字符。
 *
 * @export
 * @param {Promise} asyncMethod
 * @param {Object} params
 * @returns {Response}
 */
function useRequest(asyncMethod, params) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const parmaStr = JSON.stringify(params);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await asyncMethod(JSON.parse(parmaStr));
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    request();
  }, [asyncMethod, parmaStr]);

  return [loading, data];
}

export default useRequest;
