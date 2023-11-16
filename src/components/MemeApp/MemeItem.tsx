import React from 'react';
import {MemeResponse} from '../../types';

interface Props {
  meme: MemeResponse;
}

const MemeItem: React.FC<Props> = ({meme}) => {
  return (
    <div key={meme.id} className="card text-bg-primary mb-3">
      <div className="card-body">
        <p className="card-text">{meme.value}</p>
      </div>
    </div>
  );
};

export default MemeItem;