import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

import Vuex from 'vuex'

Vue.config.productionTip = false

//vuetify.directive('highlight', {
//bind(el, binding, vnode ){
//el stands for element
//el.style.backgroundColor = 'green';

//}

//});


new Vue({
  router,
  store,
  vuetify,
  Vuex,

  data () {
    return {
      info: null
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
