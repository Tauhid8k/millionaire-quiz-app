import { useEffect } from 'react';

const Timer = ({
  setStop,
  questionNumber,
  setQuestionNumber,
  timer,
  setTimer,
}) => {
  useEffect(() => {
    if (timer === 0) {
      setStop(true);
      setQuestionNumber(1);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setStop, setTimer, setQuestionNumber]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber, setTimer]);

  return timer;
};

export default Timer;
