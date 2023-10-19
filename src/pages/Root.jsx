import React from 'react';
import { Link } from 'react-router-dom';

function Root() {
  const menuLink = [
    {
      title: 'Endless mode',
      path: '/gameplay',
    },
    {
      title: 'Lorem mode',
      path: '/',
    },
    {
      title: 'Ipsum mode',
      path: '/',
    },
  ];

  return (
    <div className="flex justify-center  w-screen h-screen items-center bg-black text-white">
      <div className="flex justify-center flex-col items-center gap-y-10">
        <h1 className="text-5xl">Spelling dee</h1>
        <div className="flex flex-col gap-y-3">
          {menuLink.map((item) => (
            <Link to={item.path} key={item.title} className="text-3xl">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Root;
