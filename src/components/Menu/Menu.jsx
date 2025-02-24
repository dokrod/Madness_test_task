import "./Menu.scss";

const Menu = () => { 
  return (
    <aside className="menu" id="menu">
      <div className="menu__top">
        <a href="#" className="menu__close"></a>
      </div>
      <nav className="menu__nav">
        <ul className="menu__list">
          <li className="menu__item"><a href="#statistics" className="menu__link">Цифры</a></li>
          <li className="menu__item"><a href="#past-trades" className="menu__link">Сделки онлайн</a></li>
          <li className="menu__item"><a href="#about-us" className="menu__link">О компании</a></li>
          <li className="menu__item"><a href="#howToUse" className="menu__link">Как начать</a></li>
          <li className="menu__item"><a href="#tariffs" className="menu__link">Тарифы</a></li>
          <li className="menu__item"><a href="#faq" className="menu__link">FAQ</a></li>
        </ul>
      </nav>

      <div className="menu__bottom">
        <button className="menu__button menu__button--reg">Регистрация</button>
        <button className="menu__button menu__button--log">Войти</button>
      </div>
    </aside>
  );
}

export default Menu;
