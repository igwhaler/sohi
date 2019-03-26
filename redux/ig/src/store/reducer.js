import { createStore } from 'redux'

const initallState = {
  a: 123,
  testMsg: {
    count: 0
  }
}

const reducer = (state = initallState, action) => {
  let { type, payload } = action
  let { testMsg } = state

  switch (type) {
    case 'INCREASE':
      return {
        ...state,
        testMsg: {
          count: testMsg.count + payload
        }
      }

    case 'DECREASE':
      return {
        ...state,
        testMsg: {
          count: testMsg.count - 1
        }
      }

    default:
      return state;
  }
}

export default createStore(reducer)
