import { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Pyramid from './component/Pyramid';
import Timer from './component/Timer';
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

  const playAgainHandler = () => {
    setStop(false);
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        {stop ? (
          <>
            <h1 className="earned-heading">You've earned {earned}</h1>
            <button
              className="play-again-btn"
              onClick={() => playAgainHandler()}
            >
              Play Again
            </button>
          </>
        ) : (
          <>
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber} />
            </div>
            <Trivia {...triviaProps} />
          </>
        )}
      </main>
      <Pyramid questionNumber={questionNumber} moneyPyramid={moneyPyramid} />
    </div>
  );
}

export default App;
