import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ words, point }) {
  return (
    <nav className="fixed top-0 bg-primary z-20 w-full h-16 flex justify-between items-center px-16">
      <div className="flex items-center gap-x-8">
        <Link to="/selectmode" className="text-black">
          {'<'}
        </Link>
        <div className="bg-white rounded-xl text-black px-4 py-1">
          {words} Words
        </div>
      </div>
      <div className="bg-white rounded-xl text-black px-4 py-1">
        {point} Point
      </div>
    </nav>
  );
}

export default Navbar;
