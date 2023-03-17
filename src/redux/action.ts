import {createAction} from '@reduxjs/toolkit';
import {CATEGORY_LIST, PRODUCT_LIST} from './actionList';
import {dataCategoryType, dataProductType} from './types';

export const getProduct = createAction(PRODUCT_LIST.GET);
export const setProduct = createAction<Array<dataProductType | undefined>>(
  PRODUCT_LIST.SET,
);

export const getCategory = createAction(CATEGORY_LIST.GET);
export const setCategory = createAction<Array<dataCategoryType | undefined>>(
  CATEGORY_LIST.SET,
);
