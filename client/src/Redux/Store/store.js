
import { createStore, applyMiddleware, compose } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import reducer from "../Reducer/reducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))

);


export default store