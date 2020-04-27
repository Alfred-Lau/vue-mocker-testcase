import request from './uitls/request';

export default class VueMocker {
  static request(url, options) {
    const { method = 'get' } = options;
    const pool = VueMocker.meta;

    return request[method](pool[url], options);
  }
  static install(Vue, options) {
    VueMocker.meta = options.api || {};
    /* inject mocker version */
    Vue.mocker = {
      version: process.env.__MOCKER_VERSION__ || '1.0.0',
    };

    Vue.mixin({
      beforeCreate() {
        console.log('i am before created', options);
        // load mock data and cache them
      },
    });

    // 2. 添加全局资源
    Vue.directive('mocker', {
      bind(el, binding, vnode, oldVnode) {
        // 逻辑...
        console.log(el, binding, vnode, oldVnode);
      },
    });

    // 4. 添加实例方法
    Vue.prototype.$mocker = {
      get(url, options) {
        return VueMocker.request(url, options);
      },
      post(url, options) {
        console.log(url, options);

        /* 处理post 方法 */
      },
    };
  }
}
