import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import listsReducer from './listsRedux';
import columnsReducer from './columnRedux';
import searchStringReducer from './searchStringRedux';
import cardsReducer from './cardRedux';

export const getAllColumns = state =>{
  return state.columns
};
export const getListById = ({lists}, listId) => lists.find( list => list.id === listId);
export const getAllColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addList = payload => ({type: 'ADD_LIST', payload});
export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload});

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);
    
    const store = createStore(
      reducer,
      initialState,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    export default store;