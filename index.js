/**
 * @format
 */

import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'
import FilesystemStorage from 'redux-persist-filesystem-storage'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'

import reducers from "./src/reducers";

const persistConfig = {
  key: 'collector-app',
  storage: FilesystemStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))
const persistor = persistStore(store)

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);
