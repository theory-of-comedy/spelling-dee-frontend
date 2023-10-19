import React from 'react';
import { Link } from 'react-router-dom';
import bee2 from '../assets/bee2.png';
import bee3 from '../assets/bee3.png';

const SelectMode = () => {
  const mode = [
    {
      title: '5',
      path: '/gameplay/5',
    },
    {
      title: '10',
      path: '/gameplay/10',
    },
    {
      title: '15',
      path: '/gameplay/15',
    },
  ];
  return (
    <div className="w-screen h-screen bg-main-bg bg-no-repeat bg-cover bg-center">
      <div className="fixed w-full h-16 justify-center items-center bg-primary flex text-2xl font-bold px-16">
        <div>
          <Link className="text-base" to="/">
            {'<'}
          </Link>
        </div>
        <div className="flex-grow flex justify-center items-center">
          How many word do you want to play?
        </div>
      </div>
      <div className="pt-80 w-full flex justify-center items-center text-white">
        <div className="flex justify-between items-center gap-x-20">
          <img src={bee2} alt="bee2" />
          {mode.map((item, index) => (
            <Link
              className="rounded-full  bg-white border-primary border-2 w-28 h-28 flex justify-center items-center text-black font-bold text-2xl"
              key={index}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
          <img src={bee3} alt="bee3" className="pt-40" />
        </div>
      </div>
    </div>
  );
};

export default SelectMode;
