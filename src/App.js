import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Pyramid from './component/Pyramid';
import Trivia from './component/Trivia';
import { moneyPyramid, questionData } from './data';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$0');

  const triviaProps = {
    questionData,
    setStop,
    questionNumber,
    setQuestionNumber,
  };

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  return (
    <div className="app">
      <Navbar />
      <main>
        {stop ? (
          <>
            <h1 className="earned-heading">You've earned {earned}</h1>
            <button className="play-again-btn">Play Again</button>
          </>
        ) : (
          <>
            <div className="timer">30</div>
            <Trivia {...triviaProps} />
          </>
        )}
      </main>
      <Pyramid questionNumber={questionNumber} moneyPyramid={moneyPyramid} />
    </div>
  );
}

export default App;
