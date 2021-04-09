const movieMatcher = (movie, request, isShort) => {
  const {
    country,
    director,
    nameEN,
    nameRU,
    description,
    year,
    duration,
  } = movie;
  if (isShort) {
    if (duration > 40) {
      return false;
    }
  }
  if (country && country.toLowerCase().match(request)) {
    return true;
  }
  if (director && director.toLowerCase().match(request)) {
    return true;
  }
  if (nameEN && nameEN.toLowerCase().match(request)) {
    return true;
  }
  if (nameRU && nameRU.toLowerCase().match(request)) {
    return true;
  }
  if (description && description.toLowerCase().includes(request)) {
    return true;
  }
  if (year && year.match(request)) {
    return true;
  }
  return false;
};

const moviesFinder = (movies, request, isShort) => {
  return movies.filter((movie) =>
    movieMatcher(movie, request.toLowerCase(), isShort)
  );
};

export default moviesFinder;
