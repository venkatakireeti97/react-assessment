import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import contacts from './contacts'
const reducer = combineReducers({
  contacts
})
const store = configureStore({
  reducer,
})
export default store;