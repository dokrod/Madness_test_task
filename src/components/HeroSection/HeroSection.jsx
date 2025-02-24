import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img
        src="./hero-section-image.png"
        alt="Hero Section Image"
        className="hero-section__image"
      />

      <div className="hero-section__content">
        <div className="hero-section__text">
          <h1 className="hero-section__title">
            моментально Копируй сделки профи трейдеров
          </h1>
          <p className="hero-section__subtitle">
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
        </div>
        
        <div className="form_wrapper">
          <div className="hero-section__form">
            <input
              type="email"
              placeholder="Ваш e–mail"
              className="hero-section__input"
            />
            <button type="submit" className="hero-section__button">
              Начать
            </button>
          </div>

          <p className="hero-section__note">5 дней бесплатного пользования</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
