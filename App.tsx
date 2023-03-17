import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import MainPage from './src/screen/MainPage/MainPage';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainPage />
      </PersistGate>
    </Provider>
  );
}
