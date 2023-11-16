import React, {useEffect, useState} from 'react';
import MemeItem from './MemeItem';
import {MemeResponse} from '../../types';

const BASE_URL = 'https://api.chucknorris.io/jokes/random';
const MemeApp: React.FC = () => {
  const [meme, setMeme] = useState<MemeResponse>(
    {
    categories: [],
    created_at: '',
    icon_url: '',
    id: '',
    updated_at: '',
    url: '',
    value: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(BASE_URL);
      
      if (response.ok) {
        const meme: MemeResponse = await response.json();
        const newMeme = {...meme};
        setMeme(newMeme);
        setIsLoading(false);
      }
    };
    
    void fetchData();
  }, []);
  
  return (
    <div className="w-100 bg-body-tertiary p-5">
      {isLoading ? 'Loading...' : (
        <MemeItem meme={meme}/>
      )}
    </div>
  );
};

export default MemeApp;