const addMovieButton = document.getElementById('add-movie-btn');
const searchMovieButton = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue
    }
  }

  movies.push(newMovie);
  renderMovies();
  console.log(movies);
}

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    movieEl.textContent = `Title: ${movie.info.title}`;

    movieList.append(movieEl);
  })
}

addMovieButton.addEventListener('click', addMovieHandler);