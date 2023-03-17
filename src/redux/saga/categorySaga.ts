import {call, put, takeLatest} from 'redux-saga/effects';
import {getCategory, setCategory} from '../action';
import {requestType, resCategory} from '../types';
import {BASE_URL, checkStatus, createRequest} from '../utils';

export function* fetchCategoryList() {
  const objRequest: requestType = {
    path: `${BASE_URL}/category`,
    method: 'GET',
  };
  try {
    const res: resCategory = yield call(createRequest, objRequest);
    if (checkStatus(res?.status)) {
      yield put(setCategory(res?.data));
    } else {
      throw Error;
    }
  } catch (failedResponse) {
    //handle error
  }
}

export default function* categorySaga() {
  yield takeLatest(getCategory, fetchCategoryList);
}
