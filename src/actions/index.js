export const increment = (amount) => {
  return {
    type: 'INCREMENT',
    payload: amount
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}