import {fork} from 'redux-saga/effects';
import categorySaga from './categorySaga';
import productSaga from './productSaga';

export default function* () {
  yield fork(productSaga);
  yield fork(categorySaga);
}
