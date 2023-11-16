import MovieForm from './MovieForm';
import MovieList from './MovieList';
import React, {useState} from 'react';
import {Movie} from '../../types';

const MovieApp = () => {
  const [movie, setMovie] = useState<Movie[]>([
    {
      id: '1',
      title: 'Star Wars',
    },
    {
      id: '2',
      title: 'Tibet',
    }
  ]);
  
  const addMovie = (movie: Movie) => {
    setMovie((prevState) => [...prevState, movie]);
  };
  
  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newTitle = event.target.value;
    
    setMovie((prevState) => prevState.map((movie) => {
      if (movie.id === id) {
        return {...movie, title: newTitle};
      }
      return movie;
    }));
  };
  
  const deleteMovie = (id: string) => {
    setMovie((prevState) => prevState.filter(movie => {
      return movie.id !== id;
    }));
  };
  
  return (
    <div className='w-100 bg-body-tertiary p-5'>
      <MovieForm
        onSubmit={addMovie}
      />
      <MovieList
        movies={movie}
        changeTitle={changeTitle}
        onDelete={deleteMovie}
      />
    </div>
  );
};

export default MovieApp;