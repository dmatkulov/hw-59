import * as React from 'react';

interface Props {
  title: string;
  onClick: React.MouseEventHandler;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const MovieItem: React.FC<Props> = React.memo( function MovieItem({title, onClick, onChange}) {
  return (
    <div className="card p-3">
      <input value={title} onChange={onChange} className="border-0"/>
      <button className="btn-close" onClick={onClick}></button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
});

export default MovieItem;