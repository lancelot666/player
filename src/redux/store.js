import {createStore,combineReducers,applyMiddleware} from 'redux';
import * as app from './reducer/appReducer';
import * as user from './reducer/userReducer';
import thunk from 'redux-thunk';


let store = createStore(
    combineReducers({...app,...user}),  //合并reducer
    applyMiddleware(thunk)               //中间件，异步action
);
export default store;