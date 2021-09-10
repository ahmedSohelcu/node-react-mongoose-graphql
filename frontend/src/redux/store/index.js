import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//auth2 loigin
import { googleReducer } from "../reducers/reducerGoogle"
import { getAuthDataReducer } from './../reducers/auth.reducers';

const middlewares = [thunk];

const reducer = combineReducers({
  googleReducer,
  auth:getAuthDataReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
