import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/reducer";
import createSagaMiddleware from "redux-saga";
import addElementSaga from '../saga/ContentSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(addElementSaga);

export default store;
