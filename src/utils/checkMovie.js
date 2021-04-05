const checkMovie = (movie, savedMovies) => {
  let id = "";
  savedMovies.forEach((item) => {
    if (item.movieId === movie.movieId) {
      id = item._id;
    }
  });
  return id;
}

export default checkMovie;