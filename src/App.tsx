import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
