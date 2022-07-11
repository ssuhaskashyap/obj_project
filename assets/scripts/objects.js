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

const searchMovieHandler = () => {
  const filterText = document.getElementById('filter-title').value;
  renderMovies(filterText);
}

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  filteredMovies = !filter ? movies : movies.filter((val) => val.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = '';
    for (key in movie.info) {
      if (key !== title) {
        text =`${key} : ${movie.info[key]}`
      }
    }
    movieEl.textContent = `Title: ${movie.info.title} - ${text}`;

    movieList.append(movieEl);
  })
}

addMovieButton.addEventListener('click', addMovieHandler);
searchMovieButton.addEventListener('click', searchMovieHandler);