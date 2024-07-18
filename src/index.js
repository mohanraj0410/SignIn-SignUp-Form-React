import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import AppStore from './components/Store/AppStore';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(AppStore)

root.render(
  <Provider store={AppStore}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

