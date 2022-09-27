import { useEffect } from 'react';

const Timer = ({ setStop, questionNumber, timer, setTimer }) => {
  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop, setTimer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber, setTimer]);

  return timer;
};

export default Timer;
