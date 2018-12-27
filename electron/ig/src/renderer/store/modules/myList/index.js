import {
  MUTATION_ADD_LIST,
  ACTION_ADD_LIST
} from '../../type'

export default {
  state: {
    list: [1, 2, 3, 4, 5, 6]
  },

  getters: {
    evenList (state, getters, rootState) {
      return state.list.filter(item => !(item % 2))
    }
  },

  mutations: {
    [MUTATION_ADD_LIST] (state, payload) {
      state.list.push(payload)
    }
  },

  actions: {
    [ACTION_ADD_LIST] (context, payload) {
      context.commit(MUTATION_ADD_LIST, payload)
    }
  }
}
