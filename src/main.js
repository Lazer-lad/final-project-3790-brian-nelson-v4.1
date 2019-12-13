import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

import Vuex from 'vuex'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Loginpop from './components/Loginpop.vue'
Vue.config.productionTip = false;

export const eventBus = new Vue();

//DIRECTIVE STUFF
Vue.directive('highlight', {
  bind(el) {
    el.style.color = 'skyblue';
  }

});


Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.component('login-pop', Loginpop);




new Vue({
  router,
  store,
  vuetify,
  Vuex,

  data () {
    return {
      info: null,
      
    }
  },
  mounted () {
    //AXIOS stuff
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  },
  
  render: h => h(App)
  

}).$mount('#app')
