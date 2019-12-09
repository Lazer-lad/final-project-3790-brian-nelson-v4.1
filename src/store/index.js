import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
    
    name: '',
    email: '',
    
    
    },
  },
  getters: {
    user(state){
      return state.user
    },
    userName(state){
      return state.user.name
    },


  },
  mutations: {// changes the info I think
    storeUser(state, user){
      return(state.user = user)
    }
  },
  actions: {
    userLoggedIn({ commit }, user){
      commit('storeUser', user)// I don't really get this
    },
  },
  modules: {
  }
})
