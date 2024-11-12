import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import MainCard from "./components/MainCard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Projects from "./pages/Projects";
import Information from "./pages/Information";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

// (importar logo en el futuro) import imagePath from ''
// let items = ["Home", "Projects", "Information", "Contact Me"];
//<MainCard imgSrcPath={imagePath1} imgSrcPath1={imagePath}></MainCard>;
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/information" element={<Information />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
