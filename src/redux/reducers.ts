import {createReducer} from '@reduxjs/toolkit';
import {setCategory, setProduct} from './action';
import {baseReducersType} from './types';

const initialState: baseReducersType = {
  dataProduct: [],
  dataCategory: [],
};
const reducers = createReducer(initialState, builder => {
  builder.addCase(setProduct, (state, {payload}) => {
    return {...state, dataProduct: payload};
  });
  builder.addCase(setCategory, (state, {payload}) => {
    return {...state, dataCategory: payload};
  });
});

export default reducers;
