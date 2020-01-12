export const FETCH_CARS = 'FETCH_CARS';

const BASE_URL = 'https://wagon-garage-api.herokuapp.com/';

export function fetchCars(garage) {
  const promise = fetch(`${BASE_URL}${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}
