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
      <div className="col-10 w-100 mb-3">
        <label htmlFor="movie" className="w-100">
          <input
            type="text"
            value={movie.title}
            onChange={changeTitle}
            required
            placeholder="Add new movie to watchlist"
            className="form-control"
          />
        </label>
      </div>
      <div className="col-auto w-100">
        <button
          type="submit"
          className="btn btn-dark w-100"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default MovieForm;