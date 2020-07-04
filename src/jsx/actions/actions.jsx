import {
  ADD_ALL_ELEMENTS, ADD_ELEMENT, READ_ALL_CATEGORY, READ_ALL_ELEMENTS, READ_ALL_GENRE, READ_BY_UUID
} from "../constants/action-types";
import { createAction } from 'redux-actions';

export const addElement = createAction(ADD_ELEMENT);
export const addAllElements = createAction(ADD_ALL_ELEMENTS);
export const readAllElements = createAction(READ_ALL_ELEMENTS);
export const readAllCategory = createAction(READ_ALL_CATEGORY);
export const readAllGenre = createAction(READ_ALL_GENRE);
export const readByUuid = createAction(READ_BY_UUID);

