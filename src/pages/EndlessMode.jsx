import React from 'react';
import Game from '../components/Game';

function EndlessMode() {
  const wordList = [
    {
      image: [
        {
          name: 'meow',
          wordImg:
            'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        },
        {
          name: 'meow2',
          wordImg:
            'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        },
      ],
    },
    {
      image: [
        {
          name: 'meow',
          wordImg:
            'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        },
        {
          name: 'meow2',
          wordImg:
            'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        },
      ],
    },
    {
      image: [
        {
          name: 'meow',
          wordImg:
            'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        },
        {
          name: 'meow2',
          wordImg:
            'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        },
      ],
    },
  ];
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Game wordList={wordList[0]} />
    </div>
  );
}

export default EndlessMode;
