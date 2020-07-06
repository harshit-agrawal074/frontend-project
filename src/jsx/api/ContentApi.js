const BASE_URL = 'http://localhost:8080/api';
const SAVE_ELEMENT_URL = `${BASE_URL}/content`;

export function saveElementApi(payload) {
  return fetch(SAVE_ELEMENT_URL, {
    method: 'POST',
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json"
    }),
    body: JSON.stringify(payload.payload)
  });
}
