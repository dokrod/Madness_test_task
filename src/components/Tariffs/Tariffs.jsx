import { useState } from "react";
import "./Tariffs.scss";
import tariffsData from "../../tariffs.json";
import { Select, MenuItem, FormControl } from "@mui/material";

const Tariffs = () => {
  const [activeTariff, setActiveTariff] = useState("СПОТ");
  const [standartMonths, setStandartMonths] = useState(12);
  const [vipMonths, setVipMonths] = useState(12);

  const handleStandartMonthsChange = (event) => {
    setStandartMonths(event.target.value);
  };

  const handleVipMonthsChange = (event) => {
    setVipMonths(event.target.value);
  };

  const getDiscount = (months) => {
    if (months === 12) return 35;
    if (months === 6) return 20;
    if (months === 3) return 10;
    return 0;
  };

  const calculatePrice = (pricePerMonth, months) => {
    const discount = getDiscount(months);
    return pricePerMonth * months * (1 - discount / 100);
  };

  return (
    <section className="tariffs" id="tariffs">
      <div className="tariffs__wrapper">
        <h1 className="title">Тарифы</h1>
        <div className="tariffs__handler">
          <button
            className={`tariffs__button ${
              activeTariff === "СПОТ" ? "tariffs__button--active" : ""
            }`}
            onClick={() => setActiveTariff("СПОТ")}
          >
            СПОТ
          </button>
          <button
            className={`tariffs__button ${
              activeTariff === "фьючерс" ? "tariffs__button--active" : ""
            }`}
            onClick={() => setActiveTariff("фьючерс")}
          >
            фьючерс
          </button>
        </div>

        <div className="tariffs__content">
          {activeTariff === "СПОТ" ? (
            <div className="tariffs__item">
              {Object.keys(tariffsData.spot).map((key) => (
                <div className={`tariffs__item-${key}`} key={key}>
                  <h4 className="tariffs__title">{key}</h4>
                  <ul className="tariffs__list">
                    {tariffsData.spot[key].services.map((service, index) => (
                      <li className="tariffs__list-item" key={index}>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="tariffs__container">
                    <div className="tariffs__price">
                      <span className="tariffs__price-value">
                        $
                        {calculatePrice(
                          tariffsData.spot[key].price_per_month,
                          key === "standart" ? standartMonths : vipMonths
                        )}
                        {getDiscount(
                          key === "standart" ? standartMonths : vipMonths
                        ) > 0 && (
                          <span className="tariffs__price-discount">
                            -
                            {getDiscount(
                              key === "standart" ? standartMonths : vipMonths
                            )}
                            %
                          </span>
                        )}
                      </span>
                      <FormControl variant="outlined">
                        <Select
                          labelId="months-label"
                          value={
                            key === "standart" ? standartMonths : vipMonths
                          }
                          onChange={
                            key === "standart"
                              ? handleStandartMonthsChange
                              : handleVipMonthsChange
                          }
                          label="Місяців"
                          className="tariffs__select"
                        >
                          <MenuItem value={1}>1 месяц</MenuItem>
                          <MenuItem value={3}>3 месяца</MenuItem>
                          <MenuItem value={6}>6 месяцев</MenuItem>
                          <MenuItem value={12}>12 месяцев</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <button className="tariffs__button-try">
                      Попробовать{" "}
                      <p className="tariffs__button-text">5 дней бесплатно</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="tariffs__item">
              {Object.keys(tariffsData.futures).map((key) => (
                <div className={`tariffs__item-${key}`} key={key}>
                  <h4 className="tariffs__title">{key}</h4>
                  <ul className="tariffs__list">
                    {tariffsData.futures[key].services.map((service, index) => (
                      <li className="tariffs__list-item" key={index}>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="tariffs__container">
                    <div className="tariffs__price">
                      <span className="tariffs__price-value">
                        $
                        {calculatePrice(
                          tariffsData.futures[key].price_per_month,
                          key === "standart" ? standartMonths : vipMonths
                        )}
                        {getDiscount(
                          key === "standart" ? standartMonths : vipMonths
                        ) > 0 && (
                          <span className="tariffs__price-discount">
                            -
                            {getDiscount(
                              key === "standart" ? standartMonths : vipMonths
                            )}
                            %
                          </span>
                        )}
                      </span>
                      <FormControl variant="outlined">
                        <Select
                          labelId="months-label"
                          value={
                            key === "standart" ? standartMonths : vipMonths
                          }
                          onChange={
                            key === "standart"
                              ? handleStandartMonthsChange
                              : handleVipMonthsChange
                          }
                          label="Місяців"
                          className="tariffs__select"
                        >
                          <MenuItem value={1}>1 месяц</MenuItem>
                          <MenuItem value={3}>3 месяца</MenuItem>
                          <MenuItem value={6}>6 месяцев</MenuItem>
                          <MenuItem value={12}>12 месяцев</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <button className="tariffs__button-try">
                      Попробовать{" "}
                      <p className="tariffs__button-text">5 дней бесплатно</p>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
