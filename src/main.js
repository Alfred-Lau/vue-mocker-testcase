import Vue from 'vue';
import App from './App.vue';
import VueMocker from './plugins/vue-mocker';

Vue.config.productionTip = false;

Vue.use(VueMocker, {
  platform: 'yapi',
  api:
    'https://yapi.cai-inc.com/mock/733/bidding-open/result/financerEvaluateAgency',
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
