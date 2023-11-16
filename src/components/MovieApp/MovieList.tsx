import React from 'react';
import {Movie} from '../../types';
import MovieItem from './MovieItem';

interface Props {
  movies: Movie[];
  onDelete: (id: string) => void;
  changeTitle: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}
const MovieList: React.FC<Props> = (props) => {
  return (
    <>
      <h4 className="mb-3 mt-5">Add to watchlist</h4>
      {props.movies.length > 0 ? (
        props.movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            onClick={() => props.onDelete(movie.id)}
            onChange={(event) => props.changeTitle(event, movie.id)}
          />
        ))
      ) : (
        <div>Your list is empty</div>
      )}
    </>
  );
};

export default MovieList;