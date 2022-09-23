import Vue from 'vue';
import App from './App.vue';
import LottieAnimation from 'lottie-web-vue';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false;
Vue.use(LottieAnimation);
Vue.use(VueScrollTo);

new Vue({
  render: h => h(App),
}).$mount('#app');
