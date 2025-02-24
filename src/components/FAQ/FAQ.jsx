import { useState } from "react";
import "./FAQ.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import expandMoreIcon from "../../../public/icon/expand-more.svg";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="faq" id="faq">
      <h2 className="title faq__title">часто задаваемые вопросы</h2>
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary
          expandIcon={<img src={expandMoreIcon} alt="Expand more" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Что такое TradeBlade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance. Он
          представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary
          expandIcon={<img src={expandMoreIcon} alt="Expand more" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
            Что TradeBlade предлагает инвесторам
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} defaultExpanded>
        <AccordionSummary
          expandIcon={<img src={expandMoreIcon} alt="Expand more" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">
            Должен ли я перевести свои средства на TradeBlade
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default FAQ;