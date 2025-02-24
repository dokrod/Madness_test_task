import "./PastTrades.scss";
import data from "../../data.json";

const PastTrades = () => {
  return (
    <section className="past-trades" id="past-trades">
      <div className="past-trades__text-box">
        <h2 className="title">Прошедшие сделки</h2>
        <p className="past-trades__online">Онлайн</p>
      </div>
      <div className="past-trades__content">
        {data.map((item, index) => (
          <div className="past-trades__item" key={index}>
            <div className="past-trades__info">
              <span className="past-trades__pair">{item.pair}</span>
              <br />
              <span className="past-trades__type">
                {item.type}
                <span> · {item.time}</span>
              </span>
            </div>

            <div className="past-trades__container">
              <div className="past-trades__profit">
                <span className="past-trades__profit-label">Прибыль</span>
                <br />
                <span className="past-trades__profit-value">{item.profit}</span>
              </div>

              <div className="past-trades__target">
                <span className="past-trades__target-label">{item.target}</span>
                <span className="past-trades__target-date">
                  Дата входа {item.entryDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastTrades;
