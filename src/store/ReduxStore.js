import { combineReducers, createStore } from 'redux';
import { loadState } from '../localStorage/LocalStorage';
import MainPageReducer from './reducers/MainPageReducer';

const preloadState = loadState();

const reducers = combineReducers({
  mainPage: MainPageReducer,
});

const store = createStore(
  reducers,
  preloadState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
