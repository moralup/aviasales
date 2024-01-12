import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tabReducer } from './tabReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  tab: tabReducer,
});

export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools,
);
