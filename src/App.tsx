import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Header />
      <Banner src="./Imagens/Banner Desktop.png" alt="Banner"/>
      <MovieSection />
      <Banner src="./Imagens/Banner Combo Desktop.png" alt="Combo" />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default App;
