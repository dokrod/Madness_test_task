import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <span className="footer__title">Быстрая навигация</span>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__list-item"><a href="#statistics" className="footer__list-link">Цифры</a></li>
            <li className="footer__list-item"><a href="#past-trades" className="footer__list-link">Сделки онлайн</a></li>
            <li className="footer__list-item"><a href="#about-us" className="footer__list-link">о компании</a></li>
            <li className="footer__list-item"><a href="#tradeblade-info" className="footer__list-link">tradeblade это</a></li>
            <li className="footer__list-item"><a href="#howToUse" className="footer__list-link">как начать</a></li>
            <li className="footer__list-item"><a href="#tariffs" className="footer__list-link">тарифы</a></li>
            <li className="footer__list-item"><a href="#faq" className="footer__list-link">FAQ</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <img src="./logo.svg" alt="logo"  className="footer__logo"/>
        <p className="footer__copyright">© 2022 TradeBlade. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
