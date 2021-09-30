import React, { useState } from 'react'
import * as actions from './redux/actions.js'
import { connect } from 'react-redux'

import { store } from './redux/store'

function Counter (props) {
  // const [count, setCount] = useState(props.count)

  const [input, setInput] = useState(0)

  console.log('redux props', props)
  const { count, increment, dispatch } = props
  
  return (
    <div>
      <div>{props.hello}: Quantity Clicked: {count}</div>
      <button onClick={() => dispatch(actions.incrementFactory())}>+</button>
      <button onClick={() => dispatch(actions.decrementFactory())}>-</button>
      <button onClick={() => dispatch(actions.incrementOdd())}>Increment if Odd</button>
      <hr />
      <input type='number' value={input} onChange={e => setInput(Number(e.target.value))}/>
      <button onClick={() => dispatch(actions.incrementAsync(input))}>Increment Async</button>
      <hr />
      <pre>
        {JSON.stringify(store.getState())}
      </pre>
    </div>
  )
}

// you need in order to have redux state available as props
const mapStateToProps = state => ({
  count: state.count
})

// this is optional, only use if you want to limit the scope of dispatchable actions
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch({type: 'increment', data: 5})
// })

// if you want to test with custom dispatchers, uncomment lines 37-40 and pass mapDispatchToProps instead of null
export default connect(mapStateToProps, null)(Counter)
