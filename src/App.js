import React, { useState } from 'react'
import DataCard from './components/DataCard'
import MovieList from './components/MovieList';
import './App.css';
import Search from './components/Search';
import AddMovie from './components/AddMovie';







const App = () => {

  const [film, setFilm] = useState(DataCard)


  const [array, setArray] = useState([])

  const addMovie = (x) => {
    return setFilm([...film, x])
  }

  const searchMovie = (search) => {
    const test = film.filter((x) => x.title.toLowerCase().includes(search))
    return setArray(test)
  }

  const searchRating = (rating) => {
    const test = film.filter((x) => x.rate>=rating)
    return setArray(test)
  }

  return (
    <React.Fragment>
      <Search searchMovie={searchMovie} searchRating={searchRating} />
      <MovieList film={film} movie={array} />
      <AddMovie addMovie={addMovie} />
    </React.Fragment>
  )
}

export default App;
