const Pyramid = ({ moneyPyramid, questionNumber }) => {
  return (
    <div className="pyramid">
      <button className="pyramid-close-btn">&times;</button>
      <ul className="money-list">
        {moneyPyramid
          .map((m) => (
            <li
              className={`money-list-item ${
                questionNumber === m.id ? 'active' : ''
              }`}
              key={m.id}
            >
              <span className="list-item-number">
                <h5>{m.id}</h5>
              </span>
              <span className="list-item-amount">
                <h5>{m.amount}</h5>
              </span>
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default Pyramid;
