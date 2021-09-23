import React, {createContext} from 'react'

export const AppContext = createContext([
  todoFactory('redux'),
  todoFactory('firebase'),
])

export const ClickContext = createContext(0)
export const ScoreContext = createContext(0)

// Context Object, returned from calling createContext('state')
// { 
//   _currentValue, // Context API diffs against _currentValue2 to decide whe to re-render
//   _currentValue2,
//   Provider,
//   Consumer
// }
