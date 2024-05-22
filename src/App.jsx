import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { AboutUs } from "./container/AboutUs/AboutUs";
import { Chef } from "./container/Chef/Chef";
import { FindUs } from "./container/Findus/FindUs";
import { Footer } from "./container/Footer/Footer";
import { Gallery } from "./container/Gallery/Gallery";
import { Header } from "./container/Header/Header";
import { Intro } from "./container/Intro/Intro";
import { Laurels } from "./container/Laurels/Laurels";
import { Menu } from "./container/Menu/Menu";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
