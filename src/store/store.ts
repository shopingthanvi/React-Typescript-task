import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './index'
export const store = configureStore({
 reducer: {
  counterme: counterReducer
 },
})