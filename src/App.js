import React, { useState } from 'react';
import './style.css';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

export default function App() {
  const [movie, setMovie] = useState([]);

  const onAddMovie = (movie) => {
    setMovie((prevState) => {
      return [...prevState, movie];
    });
  };

  return (
    <div>
      <AddMovie onAddMovie={onAddMovie} /> <br />
      <MovieList movie={movie} />
    </div>
  );
}
