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
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL);
      
      if (response.ok) {
        const meme: MemeResponse = await response.json();
        const newMeme = {...meme};
        setMeme(newMeme);
      }
    };
    
    void fetchData();
  }, []);
  
  return (
    <>
      <MemeItem meme={meme}/>
    </>
  );
};

export default MemeApp;