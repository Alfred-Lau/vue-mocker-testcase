import Vue from 'vue';
import App from './App.vue';
import VueMocker from './plugins/vue-mocker';

import request from './axios';

Vue.config.productionTip = false;

/* 场景1： 直接挂在 Vue 上面 */

// Vue.$http = request;

/* 场景二： 挂在 Vue.prototype  上面，比较方便*/

Vue.prototype.$http = request;

Vue.use(VueMocker, {
  platform: 'yapi',

  api: {
    '/api/test': 'https://yapi.XXXX.com/mock/1816/api/blogs/list',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
