import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains.js'

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state =>{
  return state.columns
};

console.log(getAllColumns);


function reducer(state, action) {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.newColumn }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.newCard }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.newSearch };
      default:
        return state;
      }
    }
    
    const store = createStore(
      reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    export default store;