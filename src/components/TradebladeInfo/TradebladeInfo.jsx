import "./TradebladeInfo.scss";

const TradebladeInfo = () => {
  return (
    <section className="tradeblade-info" id="tradeblade-info">
      <h2 className="title">Tradeblade это</h2>
      <div className="tradeblade-info__content">
        <div className="tradeblade-info__item">
          <img src="./item1.svg" alt="" className="tradeblade-info__img" />
          <div className="tradeblade-info__text-box">
            <h3 className="tradeblade-info__item-title">Копи–трейдинг 24/7</h3>
            <p className="tradeblade-info__item-text">
              Copy–Trading позволяет следить за сделками команды и получать
              прибыль 24/7 без каких–либо усилий или проблем для вас.
            </p>
          </div>
        </div>
        <div className="tradeblade-info__item">
          <img src="./item2.svg" alt="" className="tradeblade-info__img" />
          <div className="tradeblade-info__text-box">
            <h3 className="tradeblade-info__item-title">
              Торговля спотовыми и фьючерсными сделками
            </h3>
            <p className="tradeblade-info__item-text">
              Платформа для копи–трейдинга поддерживает торговлю как спотовыми,
              так и фьючерсными сделками на Binance.
            </p>
          </div>
        </div>
        <div className="tradeblade-info__item">
          <img src="./item3.svg" alt="" className="tradeblade-info__img" />
          <div className="tradeblade-info__text-box">
            <h3 className="tradeblade-info__item-title">
              Высокая прибыль каждий день
            </h3>
            <p className="tradeblade-info__item-text">
              Каждая сделка показывает хорошие результаты на рынках за счет
              хорошего денежного и риск менеджмента.
            </p>
          </div>
        </div>
        <div className="tradeblade-info__item">
          <img src="./item4.svg" alt="" className="tradeblade-info__img" />
          <div className="tradeblade-info__text-box">
            <h3 className="tradeblade-info__item-title">
              Собственный курс по трейдингу
            </h3>
            <p className="tradeblade-info__item-text">
              Мы хотим менять комьюнити, улучшать его. В личном кабинете на
              сайте вы найдете наш собственный курс по криптовалютам, который
              поможет увереннее понимать наши сигналы и разрабатывать свои.
            </p>
          </div>
        </div>
        <div className="tradeblade-info__item">
          <img src="./item5.svg" alt="" className="tradeblade-info__img" />
          <div className="tradeblade-info__text-box">
            <h3 className="tradeblade-info__item-title">Сильное окружение</h3>
            <p className="tradeblade-info__item-text">
              Ты попадаешь в сильное крипто окружение, ведь развиваться легче
              когда нас много. В чате присутствуют люди из нашей команды,
              которые общаються со всеми, помагают и подсказывают.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradebladeInfo;
