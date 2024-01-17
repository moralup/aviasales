import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { filterReducer } from './filterReducer';
import { tabReducer } from './tabReducer';
import { ticketsReducer } from './ticketsReducer';
import { ticketsLengthReducer } from './ticketsLengthReducer';

const rootReducer = combineReducers({
  filters: filterReducer,
  tab: tabReducer,
  tickets: ticketsReducer,
  ticketsLength: ticketsLengthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => [
  //   ...getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //     thunk: {
  //       extraArgument: thunk,
  //     },
  //   }),
  // ],
});
