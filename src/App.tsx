import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import MainCard from "./components/MainCard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Projects from "./pages/Projects";
import Information from "./pages/Information";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";

// (importar logo en el futuro) import imagePath from ''
// let items = ["Home", "Projects", "Information", "Contact Me"];
//<MainCard imgSrcPath={imagePath1} imgSrcPath1={imagePath}></MainCard>;
function App() {
  return (
    <div className="roboto d-flex flex-column min-vh-100 overflow-hidden bg-secondary">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/information" element={<Information />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
