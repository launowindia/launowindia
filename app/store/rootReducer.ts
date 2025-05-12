import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  orders: orderReducer,
});

export default rootReducer; 