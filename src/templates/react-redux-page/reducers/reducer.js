import { fromJS } from 'immutable';
import { Utils } from 'kryfe-lib';
import * as actionTypes from '../consts/actionTypes.js';

const { createReducer } = Utils;
const initialState = fromJS({
  testData: null,
});

const handlers = {
  [actionTypes.GET_TEST_DATA](state, { payload }) {
    if (!payload || (!payload.body && !payload.data)) {
      return state;
    }
    const testData = payload.data ? payload.data : payload.body.data;
    return state.set('testData', fromJS(testData));
  }
};

export default createReducer(initialState, handlers);
