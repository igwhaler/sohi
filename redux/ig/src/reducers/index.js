import { createStore } from 'redux'

const initialState = {
  count: 0,
  name: '123'
}

const actionMethods = {
  INCREMENT (state, payload) {

    return { count: state.count + payload.base }
  }
}

const store = createStore((state = {}, action) => {
  let { type, payload } = action

  return actionMethods[type] ? actionMethods[type](state, payload) : initialState
})

export default store
