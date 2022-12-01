/**
 * This file contains all Redux store configuration
 * and also redux-persist configuration to allow some redux
 * to be persistent after application reloading, under the
 * hood async-storage is used to achieve this behaviour
 *
 * 1. Middlewares : where we can add external middlewares
 * 2. Root reducer that creates a single reducer from all redux
 * 3. Redux-persist configuration object, here we define which redux
 * will persist and which storage system we use to save our state data,
 * simply add redux to whitelist to save them or add redux to
 * blacklist to make them 'classic' non-persistent
 * 4. Configure our Redux store using redux-toolkit simple syntax
 */
import { configureStore, ThunkAction, Action, combineReducers, Middleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/es/storage';

import { MainDynamicSlice } from './main/main-dynamic.slice';
import { MainDataSlice } from './main/main-data.slice';

/* 1. */
const middlewares: Middleware[] = [
  /* other middlewares */
];

/* 2. */
const rootReducer = combineReducers({
  mainData: MainDataSlice.reducer,
  mainDynamic: MainDynamicSlice.reducer,
});

/* 3 */
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['mainDyn'],
  whitelist: ['mainData'],
  transforms: [
    encryptTransform({
      secretKey: 'encryption-secret-key',
    }),
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* 4. */
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

setupListeners(store.dispatch);

export default store;
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
