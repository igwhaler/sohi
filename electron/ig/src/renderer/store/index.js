import Vue from 'vue'
import Vuex from 'vuex'
/* import {
  MUTATION_NUMBER_INCREMENT,
  ACTION_NUMBER_INCREMENT,
  MUTATION_ADD_LIST,
  ACTION_ADD_LIST
} from './type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    list: [1, 2, 3, 4, 5, 6]
  },

  getters: {
    evenList (state, getters) {
      return state.list.filter(item => !(item % 2))
    },

    getSelfList: (state, getters) => (base) => {
      return state.list.filter(item => item > base)
    }
  },

  mutations: {
    [MUTATION_NUMBER_INCREMENT] (state) {
      state.count++
    },

    [MUTATION_ADD_LIST] (state, payload) {
      state.list.push(payload)
    }
  },

  actions: {
    [ACTION_NUMBER_INCREMENT] (context, payload) {
      context.commit(MUTATION_NUMBER_INCREMENT)
    },

    [ACTION_ADD_LIST] (context, payload) {
      context.commit(MUTATION_ADD_LIST, payload)
    }
  }
}) */

import myList from './modules/myList'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myList
  }
})
