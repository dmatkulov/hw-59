import * as React from 'react';
import {Movie} from '../../types';

interface Props {
  movie: Movie;
  onClick: React.MouseEventHandler;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}
const MovieItem: React.FC<Props> = React.memo( function MovieItem({movie, onClick, onChange}) {
  return (
    <div className="text-bg-dark d-flex justify-content-between align-items-center p-4 rounded-3 mb-3">
        <input
          value={movie.title}
          onChange={(e) => onChange(e, movie.id)}
          className="border-0 bg-transparent w-75"
        />
      <div>
        <button
          className="btn btn-danger"
          onClick={onClick}
        >
          Remove
        </button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.movie.title === nextProps.movie.title;
});

export default MovieItem;