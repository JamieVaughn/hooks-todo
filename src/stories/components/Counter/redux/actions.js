// Actions
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const INCREMENT_ODD = 'increment-odd'
const INCREMENT_ASYNC = 'increment-async'

// Action creators (factory functions)
function incrementFactory(num = 1) {
  return {
    type: INCREMENT,
    data: num
  }
}

function decrementFactory() {
  return {
    type: DECREMENT
  }
}

function incrementOdd() {
  return {
    type: INCREMENT_ODD,
  }
}

function incrementAsync(num) {
  return {
    type: INCREMENT_ASYNC,
    data: num
  }
}

export {
  INCREMENT,
  DECREMENT,
  INCREMENT_ODD,
  INCREMENT_ASYNC,
  incrementFactory,
  decrementFactory,
  incrementOdd,
  incrementAsync
}
