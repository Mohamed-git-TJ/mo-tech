import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import imagePath from "./assets/eclipse.png";

// (importar logo en el futuro) import imagePath from ''
function App() {
  return (
    <div>
      <NavBar companyName="MoTech" imgSrcPath={imagePath} />
    </div>
  );
}

export default App;
