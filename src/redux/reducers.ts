import {PRODUCT_LIST} from './action';
import {actionType} from './types';

const initialState = {
  data: [],
};
const reducers = (state = initialState, action: actionType) => {
  switch (action.type) {
    case PRODUCT_LIST.SET:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
