import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import WinModal from './WinModal';

function Game({ wordList }) {
  const [point, setPoint] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [secondLeft, setSecondLeft] = useState(180);
  const [isInvalid, setIsInvalid] = useState(false);
  let initAnswer = '';
  for (let i = 0; i < wordList[wordIndex]?.word?.length; i++) {
    initAnswer += '_';
  }
  const [answer, setAnswer] = useState(initAnswer ? initAnswer : '');
  const submitAnswer = () => {
    if (answer.includes('_')) {
      setIsInvalid(true);
      return;
    }
    axios
      .get(`https://api-spelling-dee.redaxn.com/word/check?word=${answer}`)
      .then((response) => {
        if (response.data) {
          setPoint(point + 20);
          setAnswer(initAnswer);
          setIsInvalid(false);
          console.log(wordIndex);
          console.log(wordList.length - 1);
          if (wordIndex === wordList?.length - 1) {
            console.log('condi');
            setIsModal(true);
            setWordIndex(wordList?.length - 1);
          } else {
            setWordIndex(wordIndex + 1);
          }
        } else {
          setAnswer(initAnswer);
          setIsInvalid(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatSecondsToMinute = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
      return '00:00';
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes} : ${formattedSeconds}`;
  };

  const replace = (str, index, replace) => {
    const strList = str.split('');
    strList[index] = replace;
    return strList.join('');
  };
  const closeWinModal = () => {
    setIsModal(false);
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.length === 1 && e.key.match(/[a-z]/)) {
        for (let i = 0; i < answer.length; i++) {
          if (answer[i] === '_') {
            setAnswer(replace(answer, i, e.key));
            break;
          }
        }
      } else if (e.key === 'Backspace') {
        for (let i = answer.length - 1; i >= 0; i--) {
          if (answer[i] !== '_') {
            setAnswer(replace(answer, i, '_'));
            break;
          }
        }
      } else if (e.key === 'Enter') {
        submitAnswer();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });
  useEffect(() => {
    setAnswer(initAnswer);
  }, [initAnswer]);

  useEffect(() => {
    if (secondLeft <= 0) {
      setIsModal(true);
    }
    const timeOut = setTimeout(() => {
      if (secondLeft - 1 < 0) {
        setSecondLeft(0);
      } else {
        if (!isModal) {
          setSecondLeft(secondLeft - 1);
        }
      }
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [secondLeft]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="absolute text-white bottom-12 w-full flex justify-center items-center ">
        <div
          className={`bg-white text-black px-5 py-3 rounded-xl text-3xl font-bold border-4 border-primary ${
            secondLeft < 5 ? 'border-4 border-red-500' : ''
          }`}
        >
          {formatSecondsToMinute(secondLeft)}
        </div>
      </div>
      {isModal && <WinModal point={point} closeWinModal={closeWinModal} />}
      <Navbar words={wordList?.length} point={point} />
      <div className="flex justify-center items-center ">
        {wordList[wordIndex]?.images.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            {index !== 0 && <h1 className=" text-4xl text-white px-10">+</h1>}
            <div className="w-64 h-64 rounded-3xl border-4 border-primary">
              <img src={item} className="w-full h-full rounded-3xl" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full px-5 pt-28">
        <div
          className={`text-white border-2 border-primary rounded-2xl px-5 w-full py-5 flex justify-center text-5xl space-x-6 font-extrabold ${
            isInvalid ? 'border-red-500' : ''
          }`}
        >
          {answer.split('').map((item, index) => (
            <div
              key={index}
              className={item === '_' ? 'text-white' : 'text-primary'}
            >
              {item.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-16">
        <button
          className="px-4 py-2 rounded-2xl bg-primary text-black "
          onClick={submitAnswer}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Game;
