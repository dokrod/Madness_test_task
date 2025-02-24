import Promo from "../Promo/Promo";
import Rectangle from "../Rectangle/Rectangle";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <div className="about-us__wrapper">
        <Rectangle width={292} />
        <h1 className="title">О компании</h1>
        <p className="about-us__text">
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.
          <br />
          <br />
          Он представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>
      <Promo
        text="Попробуйте сейчас и получите
5 дней бесплатного пользования"
        buttonText="попробовать"
      />
    </div>
  );
};

export default AboutUs;
