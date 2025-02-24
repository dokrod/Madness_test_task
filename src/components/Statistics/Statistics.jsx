import "./Statistics.scss";
import Rectangle from "../Rectangle/Rectangle";

const Statistics = () => {
  return (
    <section className="statistics" id="statistics">
      <Rectangle width={272} />
      <div className="statistics__container">
        <h2 className="title">Цифры</h2>
        <p className="statistics__subtitle">Cентябрь 2022</p>
      </div>
      <div className="statistics__content">
        <div className="statistics__item">
          <h3 className="statistics__item-title">Торговой прибыли</h3>
          <p className="statistics__item-text">2756%</p>
        </div>
        <div className="statistics__item">
          <h3 className="statistics__item-title">
            фьючерсных и спотовых сделок
          </h3>
          <p className="statistics__item-text">67</p>
        </div>
        <div className="statistics__item">
          <h3 className="statistics__item-title">прибыль подписчиков</h3>
          <p className="statistics__item-text">375000</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
