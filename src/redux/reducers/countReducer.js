import {combineReducers} from 'redux';
import {COUNT_INCREASE, COUNT_DECREASE} from '../types';

const INITIAL_STATE = {
  count: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNT_INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
