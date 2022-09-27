import { useState } from 'react';
import Navbar from './component/Navbar';
import Pyramid from './component/Pyramid';
import Trivia from './component/Trivia';
import { moneyPyramid, questionData } from './data';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const triviaProps = {
    questionData,
    setTimeOut,
    questionNumber,
    setQuestionNumber,
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <div className="timer">30</div>
        <Trivia {...triviaProps} />
      </main>
      <Pyramid questionNumber={questionNumber} moneyPyramid={moneyPyramid} />
    </div>
  );
}

export default App;
