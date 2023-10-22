import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/main.css';
import VueTheMask from 'vue-the-mask';
import store from './store/store'; // Importe a store corretamente

Vue.use(VueTheMask);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store, // Passe a store para a instância Vue
}).$mount('#app');
