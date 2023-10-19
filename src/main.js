import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/main.css';
import VueTheMask from 'vue-the-mask';

Vue.use(VueTheMask);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
