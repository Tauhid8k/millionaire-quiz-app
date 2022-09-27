import { useEffect, useState } from 'react';

const Trivia = ({
  questionData,
  setStop,
  questionNumber,
  setQuestionNumber,
  timerClass,
  setTimerClass,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [className, setClassName] = useState('');

  useEffect(() => {
    setQuestion(questionData[questionNumber - 1]);
  }, [questionData, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const clickAnsHandler = (ans) => {
    setSelectedAns(ans);
    setClassName('active');
    setTimerClass(true);
    delay(3000, () => {
      setClassName(ans.correct ? 'correct' : 'wrong');
    });
    delay(6500, () => {
      if (ans.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAns(null);
        setTimerClass(false);
      } else {
        setStop(true);
        setQuestionNumber(1);
        setTimerClass(false);
      }
    });
  };

  return (
    <div className="trivia">
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <div className="question">{question?.question}</div>
        <div className="answers">
          {question?.answers.map((ans, index) => (
            <div
              className={`answer ${selectedAns === ans ? className : ''}`}
              onClick={() => clickAnsHandler(ans)}
              key={index}
            >
              {ans.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trivia;
