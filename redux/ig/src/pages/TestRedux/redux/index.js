import { createStore } from 'redux'

const initallState = { count: 0 }

const reducer = ( state = initallState, action ) => {
  let { type, payload } = action

  switch (type) {
    case 'INCREASE':
      return { count: state.count + payload }

    case 'DECREASE':
      return { count: state.count - 1 }

    default:
      return state;
  }
}

export const actions = {
  increase: (payload) => ({ type: 'INCREASE', payload }),
  decrease: () => ({ type: 'DECREASE' })
}

export const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})
