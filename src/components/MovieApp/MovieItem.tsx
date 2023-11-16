import * as React from 'react';
import {Movie} from '../../types';

interface Props {
  movie: Movie;
  onClick: React.MouseEventHandler;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}
const MovieItem: React.FC<Props> = React.memo( function MovieItem({movie, onClick, onChange}) {
  return (
    <div className="card p-3">
      <input
        value={movie.title}
        onChange={(e) => onChange(e, movie.id)}
        className="border-0"
      />
      <button
        className="btn-close"
        onClick={onClick}
      />
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.movie.title === nextProps.movie.title;
});

export default MovieItem;