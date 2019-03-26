export const increase = (payload) => {
  return {
    type: 'INCREASE',
    payload
  }
}

export const decrease = (payload) => {
  return {
    type: 'DECREASE',
    payload
  }
}
