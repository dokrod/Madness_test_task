import "./HowToUse.scss";

const HowToUse = () => {
  return (
    <div className="howToUse" id="howToUse">
      <img src="./rectangle-blue.svg" alt="" className="rectangle" />
      <img src="./rectangle-blue-pc.svg" alt="" className="rectangle-pc" />
      <h1 className="title">Как начать пользоваться сервисом</h1>
      <div className="howToUse__content">
        <div className="howToUse__item">
          <div className="howToUse__item-title">Создайте аккаунт</div>
          <div className="howToUse__item-text">
            Начните бесплатную 3-дневную пробную версию. Кредитная карта не
            требуется.
          </div>
        </div>
        <div className="howToUse__item">
          <div className="howToUse__item-title">
            Подключить обмен API ключами
          </div>
          <div className="howToUse__item-text">
            Просто вставьте свои ключи API из личного кабинета.
          </div>
        </div>
        <div className="howToUse__item">
          <div className="howToUse__item-title">Настройте аккаунт</div>
          <div className="howToUse__item-text">
            Поставьте нужные настройки депозита на каждый сигнал и нажмите
            сохранить.
          </div>
        </div>
        <div className="howToUse__item">
          <div className="howToUse__item-title">Ваш копитрейдер запущен</div>
          <div className="howToUse__item-text">
            Просто расслабьтесь и начните получать пассивный доход от
            криптовалюты с помощью TradeBlade
          </div>
        </div>
      </div>

      <button className="howToUse__button">Попробовать бесплатно</button>
    </div>
  );
};

export default HowToUse;
