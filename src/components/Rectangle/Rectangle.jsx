import "./Rectangle.scss";
import PropTypes from "prop-types";

const Rectangle = ({ width }) => {
  return (
    <>
    <img
      src="/rectangle.svg"
      alt="Rectangle"
      className="rectangle"
      width={width}
    />
    <img
      src="/rectangle-pc.svg"
      alt="Rectangle"
      className="rectangle-pc"
    />
    </>
  );
};

Rectangle.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Rectangle;
