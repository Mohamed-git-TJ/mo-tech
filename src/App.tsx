import NavBar from "./components/NavBar";
import MainCard from "./components/MainCard";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/eclipse.png";
import imagePath1 from "./assets/mohamedColegio.jpg";

// (importar logo en el futuro) import imagePath from ''
function App() {
  let items = ["Home", "Projects", "Information", "Contact Me"];
  return (
    <div>
      <NavBar companyName="MoTech" imgSrcPath={imagePath} navItems={items} />
      <MainCard imgSrcPath={imagePath1} imgSrcPath1={imagePath}></MainCard>
    </div>
  );
}

export default App;
