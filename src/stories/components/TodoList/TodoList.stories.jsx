import React from 'react'

import TodoList from './TodoList'

export default {
  title: 'Example/TodoList',
  component: TodoList,
  argTypes: {

  },
};

const Template = args => <TodoList {...args} />

export const MyTodoList = Template.bind({})
MyTodoList.args = {
  
}
