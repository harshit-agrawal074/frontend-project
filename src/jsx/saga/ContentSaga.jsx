import {ADD_ELEMENT} from "../constants/action-types";
import { call, takeLatest } from 'redux-saga/effects';
import {saveElementApi} from '../api/ContentApi';

export function* saveElement(payload) {
    yield call(saveElementApi, payload);
}

function* addElementSaga() {
  yield takeLatest(ADD_ELEMENT, saveElement)
}


export default addElementSaga;
