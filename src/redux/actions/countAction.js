import {COUNT_INCREASE, COUNT_DECREASE} from '../types';

export const increment = () => {
  return {
    type: COUNT_INCREASE,
  };
};

export const decrement = () => {
  return {
    type: COUNT_DECREASE,
  };
};
