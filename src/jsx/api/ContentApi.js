const BASE_URL = 'http://localhost:8080/api';
const SAVE_ELEMENT_URL = `${BASE_URL}/content`;

export function saveElementApi(payload) {
  return fetch(SAVE_ELEMENT_URL, {
    mode: "no-cors",
    headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
    method: "POST",
    entity : payload
  }).json();
}
