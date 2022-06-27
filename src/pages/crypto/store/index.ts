import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './reducers/crypto';

const store = configureStore({ reducer: { crypto: cryptoReducer } });

export default store;
