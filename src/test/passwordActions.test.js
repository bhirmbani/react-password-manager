import { ADD_PASSWORD_SUCCESS, GET_PASSWORDS_SUCCESS } from '../actions/constants';
import { addPasswordSuccess, getPasswordsSuccess } from '../actions/passwordActions';

describe('passwordAction creator testing', () => {
  test('ADD_PASSWORD_SUCCESS action creator works', () => {
    const mockData = {
     "id": 2,
     "url": "http://hacktiv8.com/",
     "username": "Bhir",
     "password": "aAmin1@",
     "createdAt": "2017-01-01",
     "updatedAt": "2017-01-01"
   };
   const expectedAction = {
     type: ADD_PASSWORD_SUCCESS,
     payload: mockData
   };
   expect(addPasswordSuccess(mockData)).toEqual(expectedAction);
  })

  test('GET_PASSWORDS_SUCCESS action creator works', () => {
     const mockData = [];
     const expectedAction = {
       type: GET_PASSWORDS_SUCCESS,
       payload: mockData
     };
     expect(getPasswordsSuccess(mockData)).toEqual(expectedAction);
    })

  test('should return error when password not pass verification', () => {

  })
})
