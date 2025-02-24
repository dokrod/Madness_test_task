import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src="./logo.svg" alt="logo" className="header__logo" />
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#statistics" className="nav__link">
              Цифры
            </a>
          </li>
          <li className="nav__item">
            <a href="#past-trades" className="nav__link">
              Сделки онлайн
            </a>
          </li>
          <li className="nav__item">
            <a href="#about-us" className="nav__link">
              о компании
            </a>
          </li>
          <li className="nav__item">
            <a href="#tradeblade-info" className="nav__link">
              tradeblade это
            </a>
          </li>
          <li className="nav__item">
            <a href="#howToUse" className="nav__link">
              как начать
            </a>
          </li>
          <li className="nav__item">
            <a href="#tariffs" className="nav__link">
              тарифы
            </a>
          </li>
          <li className="nav__item">
            <a href="#faq" className="nav__link">
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__buttons">
        <button className="header__button header__button--log">Войти</button>
        <button className="header__button header__button--reg">Регистрация</button>
      </div>

      <a href="#menu" className="header__icon"></a>
    </header>
  );
};

export default Header;
