const Trivia = () => {
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
        <div className="question">
          What's the best youtube channel for coding?
        </div>
        <div className="answers">
          <div className="answer wrong">Lama Dev</div>
          <div className="answer">Lama Dev</div>
          <div className="answer">Lama Dev</div>
          <div className="answer">Lama Dev</div>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
