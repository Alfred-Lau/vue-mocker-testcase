import request from './uitls/request';
import Strategies from './strats';

/*
1. 插件 要导出一个 包含 install 函数的对象，或者直接导出 install 方法
*/
export default class VueMocker {
  static request(url, options) {
    /* 做参数校验 */

    if (typeof options === 'undefined') {
      return request(url);
    }
    const { method = 'get' } = options;
    const pool = VueMocker.meta;

    return request[method](pool[url], options);
  }
  static install(Vue, options) {
    /* 非开发环境不启用 mock 插件，不比对接口数据 */
    if (process.env.NODE_ENV !== 'development') {
      console.log('careful, dangerous zone');
      if (process.env.NODE_ENV !== 'LOCAL') {
        console.log('You are a really man, byebye');
        return;
      }
    }
    VueMocker.meta = options.api || {};
    /* inject mocker version */
    Vue.mocker = {
      version: process.env.__MOCKER_VERSION__ || '1.0.0',
    };

    Vue.mixin({
      beforeCreate() {
        // console.log('第一步：我要开始拉取所有API结构到本地啦', options);
        // load mock data and cache them
        // VueMocker.request(
        //   'https://yapi.cai-inc.com/mock/1816/api/blog/detail'
        // ).then((res) => {
        //   console.log('evidence', res.data);
        // });
        // VueMocker.request(
        //   'https://yapi.cai-inc.com/api/interface/list_menu?project_id=1816&token=fb549ebd09dac8b3c594b218f3944712597af9b2f1ef86939b931abe3a6dafb7'
        // ).then((value) => {
        //   console.log('evidence', value);
        // });

        // console.log('第二步: 我要依据拉取到的api接口数据进行接口测试啦');

        /* 我要劫持到 request ,然后硬来！ */
        const baby = Vue.prototype.$http;

        /* 好屌！ */

        // console.log('mock-server-data', {});
        baby.interceptors.response.use(
          function(response) {
            // console.log('prod-server-data', response.data);
            VueMocker.request(
              'https://yapi.cai-inc.com/mock/1816/api/blog/detail'
            ).then((res) => {
              const compareResult = Strategies.compareCommon(
                res.data,
                response.data
              );

              if (compareResult.error.size === 0) {
                alert('服务器接口参数无误');
              }
              console.log('compareResult', compareResult);
            });

            return response;
          },
          function(err) {
            return err;
          }
        );
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
