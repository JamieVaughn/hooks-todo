import React from 'react'

import TodoItem from './TodoItem'

export default {
  title: 'Example/TodoItem',
  component: TodoItem,
  argTypes: {

  },
};

const Template = args => <TodoItem {...args} />

export const MyTodoItem = Template.bind({})
MyTodoItem.args = {
  
}
