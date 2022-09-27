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
  const [timer, setTimer] = useState(30);
  const [timerClass, setTimerClass] = useState(false);

  const triviaProps = {
    questionData,
    setStop,
    questionNumber,
    setQuestionNumber,
    timerClass,
    setTimerClass,
  };

  const timerProps = {
    setStop,
    questionNumber,
    timer,
    setTimer,
  };

  const pyramidProps = {
    questionNumber,
    moneyPyramid,
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
            <div className={`timer ${timerClass ? 'gold-timer' : ''}`}>
              <Timer {...timerProps} />
            </div>
            <Trivia {...triviaProps} />
          </>
        )}
      </main>
      <Pyramid {...pyramidProps} />
    </div>
  );
}

export default App;
