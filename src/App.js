import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Developer from "./components/Developer";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/services.scss";
import "./styles/dev.css";
import "./styles/mediaquery.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
