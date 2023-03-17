import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import Storage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import {configureStore} from '@reduxjs/toolkit';

const persistConfig = {
  key: 'productlistapp',
  storage: Storage,
};

const combineReducer = combineReducers({reducers});

const persistedReducer = persistReducer(persistConfig, combineReducer);

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga],
});

export const persistor = persistStore(store);
