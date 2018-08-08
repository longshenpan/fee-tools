import API from '../api';
import * as actionTypes from '../consts/actionTypes';

export function getTestData(params) {
  return {
    type: actionTypes.GET_TEST_DATA,
    payload: API.getTestData(params),
  };
}
