import Vue from 'vue';
import LoadScript from 'vue-plugin-load-script';
import App from './App.vue';
import router from './router';
import 'bootstrap';

Vue.config.productionTip = false;
Vue.use(LoadScript);
Vue.loadScript('./js/scripts.js');

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
