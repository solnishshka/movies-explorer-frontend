const moviesMapper = (movies) => {
  return movies.map((movie) => {
    return {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image ? `https://api.nomoreparties.co${movie.image.url}` : '',
      trailer: movie.trailerLink ?? "",
      thumbnail: movie.image ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` : '',
      nameRU: movie.nameRU ?? "",
      nameEN: movie.nameEN ?? "",
      movieId: String(movie.id),
    }
  })
}

export default moviesMapper;