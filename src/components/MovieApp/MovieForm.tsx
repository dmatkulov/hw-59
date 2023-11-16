import {Movie, MovieMutation} from '../../types';
import React, {useState} from 'react';

interface Props {
  onSubmit: (movie: Movie) => void;
}
const MovieForm: React.FC<Props> = ({onSubmit}) => {
  const [movie, setMovie] = useState<MovieMutation>(
    {title: ''}
  );
  
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMovie((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };
  
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...movie,
    });
    setMovie({ title: '' });
  };
  
  return (
    <form onSubmit={onFormSubmit} className="row">
      <div className="form-group">
        <label htmlFor="movie"></label>
        <input
          type="text"
          value={movie.title}
          onChange={changeTitle}
          required
          placeholder="Add new movie to watchlist"
          className="form-control"
        />
      </div>
      <div className="col">
        
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default MovieForm;