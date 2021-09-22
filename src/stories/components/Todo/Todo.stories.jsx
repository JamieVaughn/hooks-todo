import React from 'react'

import Todo from './Todo'

export default {
  title: 'Example/Todo',
  component: Todo,
  argTypes: {

  },
};

const Template = args => <Todo {...args} />

export const MyTodo = Template.bind({})
MyTodo.args = {
  name: 'Jamie'
}
