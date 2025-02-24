import "./Promo.scss";
import PropTypes from "prop-types";

const Promo = ({ text, buttonText }) => {
  return (
    <section className="promo">
      <h4 className="promo__title">{text}</h4>

      <form action="" className="promo__form">
        <input type="email" className="promo__input" placeholder="Ваш e-mail" />
        <button type="submit" className="promo__button">
          {buttonText}
        </button>
      </form>
    </section>
  );
};
Promo.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Promo;
