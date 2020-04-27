export default class VueMocker {
  static install(Vue, options) {
    /* inject mocker version */
    Vue.mocker = {
      version: process.env.__MOCKER_VERSION__ || '1.0.0',
    };

    Vue.mixin({
      beforeCreate() {
        console.log('i am before created', options);
        // load mock data
      },
    });

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      // bind(el, binding, vnode, oldVnode) {
      //   // 逻辑...
      // },
    });

    // 4. 添加实例方法
    Vue.prototype.$mocker = {
      get(url, options) {
        console.log(url, options);
        // 处理 get 方法
      },
      post(url, options) {
        console.log(url, options);

        /* 处理post 方法 */
      },
    };
  }
}
