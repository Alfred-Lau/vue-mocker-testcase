const defaultCommonTemplate = {
  success: 'boolean',
  statusCode: 'number',
  data: 'object',
  statusText: 'string',
};
/**
 *比较
 1. 服务器返回的数据是否满足公共接口结构
 2. 服务器返回的数据是否和mock【yapi】上面定义的一致
 *
 * @param {*} mock
 * @param {*} server
 * @param {*} template
 * @returns
 */
const compareTemplate = (mock, server, template) => {
  if (typeof template === 'undefined') {
    template = defaultCommonTemplate;
  }

  const error = new Map();

  // /* 1. 先进行 公共返回接口 的校验*/
  for (const key in template) {
    const type = template[key];
    if (server[key] === undefined) {
      error.set('公共参数不齐', { key: key });
    }

    if (typeof server[key] !== type) {
      error.set('公共参数类型不对', {
        currentType: server[key],
        shouldType: type,
      });
    }
  }

  return {
    error,
  };
};

export default compareTemplate;
