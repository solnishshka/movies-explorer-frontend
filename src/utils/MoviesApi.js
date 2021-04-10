export const BASE_URL = 'https://api.nomoreparties.co';

export const headers = {
  "Content-Type": "application/json",
}

export const getMovies = () => {
  return fetch(`${BASE_URL}/beatfilm-movies`, {
    headers,
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
  });
}