import "./App.scss";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Menu from "./components/Menu/Menu";
import PastTrades from "./components/PastTrades/PastTrades";
import Statistics from "./components/Statistics/Statistics";
import Promo from "./components/Promo/Promo";
import AboutUs from "./components/AboutUs/AboutUs";
import TradebladeInfo from "./components/TradebladeInfo/TradebladeInfo";
import HowToUse from "./components/HowToUse/HowToUse";
import Tariffs from "./components/Tariffs/Tariffs";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <HeroSection />
      <Statistics />
      <PastTrades />
      <AboutUs />
      <TradebladeInfo />
      <HowToUse />
      <Tariffs />
      <FAQ />
      <Promo
        text={"Начните прямо сейчас с бесплатным 5–и дневным пробным периодом!"}
        buttonText={"зарегистрироваться"}
      />
      <Footer />
    </div>
  );
}

export default App;
