import {call, put, takeLatest} from 'redux-saga/effects';
import {getProduct, setProduct} from '../action';
import {requestType, resProduct} from '../types';
import {BASE_URL, checkStatus, createRequest} from '../utils';

export function* fetchProductList() {
  try {
    const objRequest: requestType = {
      path: `${BASE_URL}/products`,
      method: 'GET',
    };
    const res: resProduct = yield call(createRequest, objRequest);
    if (checkStatus(res?.status)) {
      yield put(setProduct(res?.data));
    } else {
      throw Error;
    }
  } catch (responseFailed) {
    //handle error
  }
}

export default function* productSaga() {
  yield takeLatest(getProduct, fetchProductList);
}
