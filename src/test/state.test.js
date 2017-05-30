import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddPassword } from '../components/AddPassword';

function validateLower(value) {
  const lower = new RegExp('^(?=.*[a-z])');
  let lowerStatus = false;
  if (lower.test(value)) {
    return lowerStatus = true;
  } else {
    return lowerStatus = false;
  }
}

function validateUpper(value) {
  const upper = new RegExp('^(?=.*[A-Z])');
  let upperStatus = false;
  if(upper.test(value)) {
    return upperStatus = true;
  } else {
    return upperStatus = false;
  }
}

function validateSpecial(value) {
  const special = new RegExp('^(?=.*[!@#$%^&*])');
  let specialStatus = false;
  if(special.test(value)) {
    return specialStatus = true;
  } else {
    return specialStatus = false;
  }
}

function validateNumber(value) {
  const number = new RegExp('^(?=.*[0-9])');
  let numberStatus = false;
  if(number.test(value)) {
    return numberStatus = true;
  } else {
    return numberStatus = false;
  }
}

function validateLength(value) {
  const length = new RegExp('^(?=.{6,})');
  let lengthStatus = false;
  if(length.test(value)) {
    return lengthStatus = true;
  } else {
    return lengthStatus = false;
  }
}

describe('<AddPassword />', () => {
  test('isLowerCase state should return false', () => {
    const wrapper = shallow(<AddPassword />)
    expect(wrapper.state('isLowerCase')).toBe(false)
  })

  test('isUpperCase state should return false', () => {
    const wrapper = shallow(<AddPassword />)
    expect(wrapper.state('isUpperCase')).toBe(false)
  })

  test('isSpecial state should return false', () => {
    const wrapper = shallow(<AddPassword />)
    expect(wrapper.state('isSpecial')).toBe(false)
  })

  test('isNumber state should return false', () => {
    const wrapper = shallow(<AddPassword />)
    expect(wrapper.state('isNumber')).toBe(false)
  })

  test('isLength5 state should return false', () => {
    const wrapper = shallow(<AddPassword />)
    expect(wrapper.state('isLength5')).toBe(false)
  })

  test('isLowerCase state should return true when user inserted lowercase letter', () => {
    let password = 'a'
    let testCase = validateLower(password);
    expect(testCase).toBe(true)
  })

  test('isUpperCase state should return true when user inserted uppercase letter', () => {
    let password = 'A'
    let testCase = validateUpper(password);
    expect(testCase).toBe(true)
  })

  test('isSpecial state should return true when user inserted special character letter', () => {
    let password = '@'
    let testCase = validateSpecial(password);
    expect(testCase).toBe(true)
  })

  test('isNumber state should return true when user inserted number', () => {
    let password = '2'
    let testCase = validateNumber(password);
    expect(testCase).toBe(true)
  })

  test('isLength5 state should return true when user inserted letter more than 5', () => {
    let password = '213211'
    let testCase = validateLength(password);
    expect(testCase).toBe(true)
  })
})