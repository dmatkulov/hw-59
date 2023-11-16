import React from 'react';
import {Movie} from '../../types';
import MovieItem from './MovieItem';

interface Props {
  movies: Movie[];
  onDelete: (id: string) => void;
  changeTitle: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}
const MovieList: React.FC<Props> = ({movies, onDelete, changeTitle}) => {
  return (
    <>
      <h4>Add to watchlist</h4>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          onClick={() => onDelete(movie.id)}
          onChange={(event) => changeTitle(event, movie.id)}
        />
      ))}
    </>
  );
};

export default MovieList;