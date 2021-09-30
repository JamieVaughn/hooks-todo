import React from 'react'

import Counter from './Counter'
import { Provider } from 'react-redux';
import { store } from './redux/store'

export default {
  title: 'Example/Counter',
  component: Counter,
  argTypes: {

  },
};

const Template = args => (
  <Provider store={store}>
    <Counter {...args} />
  </Provider>
)
  

export const MyCounter = Template.bind({})
MyCounter.args = {
  count: 5,
  hello: 'hello'
}

