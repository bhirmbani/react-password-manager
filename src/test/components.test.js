import React from 'react';
import { shallow, mount } from 'enzyme';
import App  from '../App.js'
import Navigation from '../components/Navigation'
import JumbotronCom from '../components/Jumbotron'

describe('Testing <App /> component', () => {
  test('should render <Navigation /> and <Jumbotron /> succesfully', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.containsAllMatchingElements([<Navigation />, <JumbotronCom />]))
  })
})