import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { reducer as AuthReducer } from "./authreducer/reducer";
import { reducer as TaskReducer } from "./taskreducer/reducer"
const rootReducer = combineReducers({ AuthReducer, TaskReducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };