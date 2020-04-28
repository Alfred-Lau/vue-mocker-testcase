/**
 *测试对象是否是数组
 *
 * @param {*} obj
 */
const isArray = (obj) => Object.prototype.toString.call(obj);

/**
 *拍平数组
 *
 * @param {*} arr
 */
const flatArray = (arr) => {
  return arr.reduce((previous, current) => {
    return previous.concat(
      Array.isArray(current) ? flatArray(current) : current
    );
  }, []);
};

export default { isArray, flatArray };
