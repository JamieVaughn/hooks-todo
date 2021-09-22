import React from 'react'

import TodoForm from './TodoForm'

export default {
  title: 'Example/TodoForm',
  component: TodoForm,
  argTypes: {

  },
};

const Template = args => <TodoForm {...args} />

export const MyTodoForm = Template.bind({})
MyTodoForm.args = {
  
}
