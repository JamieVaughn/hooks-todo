import * as actions from './actions'
import { store } from './store'

const initialState = {
  count: 0,
  name: 'Jamie',
  lots: 'ofstate'
}

export function reducer (state = initialState, action) {
  switch(action.type) {
    case actions.INCREMENT:
      return { 
        ...state,
        count: state.count + action.data 
      }
    case actions.DECREMENT:
      return { 
        ...state,
        count: state.count - 1 
      }
    case actions.INCREMENT_ODD:
      return {
        ...state,
        count: state.count%2===0 ? state.count : state.count + 1
      }
    case actions.INCREMENT_ASYNC:
      setTimeout(() => {
        console.log('async')
        store.dispatch(actions.incrementFactory(action.data))
      }, 3000)
      return state
    case actions.NEW_ACTION:
      return state
    default:
      return state
  }
}
