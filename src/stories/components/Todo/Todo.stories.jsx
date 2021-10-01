import React from 'react'

import Todo from './Todo'

// redux toolkit stuff
import { Provider } from 'react-redux';
import { store } from '../../../redux/store.js'

export default {
  title: 'Example/Todo',
  component: Todo,
  argTypes: {

  },
};

const Template = args => (
  <Provider store={store}>
    <Todo {...args} />
  </Provider>
)

export const MyTodo = Template.bind({})
MyTodo.args = {
  name: 'Jamie'
}
