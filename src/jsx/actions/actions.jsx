import {
  ADD_ALL_ELEMENTS, ADD_ELEMENT, READ_ALL_CATEGORY, READ_ALL_ELEMENTS, READ_ALL_GENRE, READ_BY_UUID
} from "../constants/action-types";

export function addElement(payload) {
  return { type: ADD_ELEMENT, payload }
}

export function addAllElements(payload) {
  return { type: ADD_ALL_ELEMENTS, payload}
}

export function readAllElements(payload) {
  return { type: READ_ALL_ELEMENTS, payload}
}

export function readAllCategory(payload) {
  return { type: READ_ALL_CATEGORY, payload}
}

export function readAllGenre(payload) {
  return { type: READ_ALL_GENRE, payload}
}

export function readByUuid(payload) {
  return { type: READ_BY_UUID, payload}
}
