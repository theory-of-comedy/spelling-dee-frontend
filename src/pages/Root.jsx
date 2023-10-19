import React from 'react';
import bee from '../assets/bee.png';
import { Link } from 'react-router-dom';

function Root() {
  return (
    <div className="flex justify-center min-h-fit w-screen h-screen items-center bg-main-bg text-white bg-no-repeat bg-center bg-cover">
      <div className="flex items-center w-full flex-wrap-reverse">
        <div className="lg:pl-32 md:pl-16 pl-8 sm:w-[60%] font-Poppins">
          <h1 className="text-[#FFD747] font-bold mb-10 lg:text-3xl md:text-2xl text-xl">
            SPELLING DEE DA VINCI CODE
          </h1>
          <h3 className="text-[#FFD747] font-bold mb-5 text-xl">Proved By</h3>
          <h1 className="text-white font-bold mb-5 lg:text-5xl text-4xl">
            Theory of Comedy
          </h1>
          <p className="text-white font-normal mb-24">
            01076121 Theory of Computation Assignment an Application of Regular
            Expression Computer Engineering, KMITL
          </p>
          <Link
            className="py-2 px-5 bg-[#FFD747] rounded-xl text-black"
            to="/selectmode"
          >
            Get start
          </Link>
        </div>
        <div className="sm:w-[40%]">
          <img src={bee} alt="" className="w-full h-ful" />
        </div>
      </div>
    </div>
  );
}

export default Root;
