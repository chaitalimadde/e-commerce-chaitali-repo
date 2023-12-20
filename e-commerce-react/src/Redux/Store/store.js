import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import addTokenReducer from '../Reducers';


const store = createStore(
    addTokenReducer,
    composeWithDevTools(applyMiddleware(thunk))

)

export default store;