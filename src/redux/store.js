import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case 'ADD-COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] }
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    case 'UPDATE_SEARCHSTRING':
      return {...state, searchString: action.newSearch}
      default:
      return state;
  }
};
const store = configureStore(
  {reducer, preloadedState: initialState}
);
export default store;