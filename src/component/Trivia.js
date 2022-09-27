import { useEffect, useState } from 'react';

const Trivia = ({
  questionData,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [className, setClassName] = useState('');

  useEffect(() => {
    setQuestion(questionData[questionNumber - 1]);
  }, [questionData, questionNumber]);

  const clickAnsHandler = (ans) => {
    setSelectedAns(ans);
    setClassName('active');
    setTimeout(() => {
      setClassName(ans.correct ? 'correct' : 'wrong');
    }, 3000);
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
