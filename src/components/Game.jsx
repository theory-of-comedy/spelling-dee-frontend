import React, { useState } from 'react';

function Game(wordList) {
  console.log(wordList);

  const [answer, setAnswer] = useState('');
  const submitAnswer = () => {
    console.log(answer);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center pt-10">
        <input
          className="border-[1px] border-black rounded-md px-5 py-3"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button
        className="border-green-500 border-2 px-3 py-2 rounded-lg text-green-500 "
        type="submit"
        onClick={submitAnswer}
      >
        submit
      </button>
    </div>
  );
}

export default Game;
