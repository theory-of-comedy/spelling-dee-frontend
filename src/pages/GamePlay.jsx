import React, { useEffect, useState } from 'react';
import Game from '../components/Game';
import axios from 'axios';

function GamePlay() {
  const [wordList, setWordlist] = useState([]);
  useEffect(() => {
    axios
      .get('https://api-spelling-dee.redaxn.com/words?words=5')
      .then((response) => {
        setWordlist(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <Game wordList={wordList} />
    </div>
  );
}

export default GamePlay;
