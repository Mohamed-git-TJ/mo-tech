import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/eclipse.png";

// (importar logo en el futuro) import imagePath from ''
function App() {
  let items = ["Home", "Projects", "Information", "Contact Me"];
  return (
    <div>
      <NavBar companyName="MoTech" imgSrcPath={imagePath} navItems={items} />
    </div>
  );
}

export default App;
