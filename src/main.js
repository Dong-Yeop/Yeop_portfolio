import Vue from 'vue';
import App from './App.vue';
import LottieAnimation from 'lottie-web-vue';

Vue.config.productionTip = false;
Vue.use(LottieAnimation);

new Vue({
  render: h => h(App),
}).$mount('#app');
