import {
  registerErrors,
  loginErrors,
  defaultErrors,
  updateProfileErrors,
} from "../config/error-messages";

export const BASE_URL = "https://api.diploma.solnishshka.xyz";

export const headers = {
  authorization: `Bearer ${localStorage.getItem("jwt")}`,
  "Content-Type": "application/json",
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      password,
      email,
    }),
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else {
      if (result.status === 409) {
        throw new Error(registerErrors.conflict);
      }
      throw new Error(registerErrors.default);
    }
  });
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
      email,
    }),
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else {
      if (result.status === 401) {
        throw new Error(loginErrors.incorrect);
      }
      throw new Error(defaultErrors.default);
    }
  });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers,
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else {
      if (result.status === 401) {
        throw new Error(loginErrors.tokenInvalid);
      }
      throw new Error(loginErrors.tokenNotFound);
    }
  });
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers,
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
  });
};

export const updateProfile = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else {
      if (result.status === 409) {
        throw new Error(updateProfileErrors.conflict);
      }
      throw new Error(updateProfileErrors.default);
    }
  });
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers,
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
  });
};

export const addNewMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  nameRU,
  nameEN,
  thumbnail,
  movieId,
}) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: image,
      trailer: trailer,
      nameRU: nameRU,
      nameEN: nameEN,
      thumbnail: thumbnail,
      movieId: movieId,
    }),
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
  });
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers,
  }).then((result) => {
    if (result.ok) {
      return result.json();
    } else return Promise.reject(`Что-то пошло не так: ${result.status}`);
  });
};
