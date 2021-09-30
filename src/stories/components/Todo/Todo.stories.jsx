import React from 'react'

import Todo from './Todo'

// redux toolkit refactor
import store from '../../../redux/store'
import { Provider } from 'react-redux'

export default {
  title: 'Example/Todo',
  component: Todo,
  argTypes: {

  },
};

const Template = args => (
  <Provider store={store}>
    {console.log(store.getState())}
    <Todo {...args} />
  </Provider>
)

export const MyTodo = Template.bind({})
MyTodo.args = {
  name: 'Jamie'
}
