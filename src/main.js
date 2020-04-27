import Vue from 'vue';
import App from './App.vue';
import VueMocker from './plugins/vue-mocker';

Vue.config.productionTip = false;

Vue.use(VueMocker, {
  platform: 'yapi',

  api: {
    '/api/test': 'https://yapi.cai-inc.com/mock/1816/api/blogs/list',
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
