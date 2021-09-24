const changeAmountReducer = (state = 1, action) => {
  if (action.type === 'CHANGE') {
    return action.payload
  } else {
    return state
  }
}

export default changeAmountReducer;