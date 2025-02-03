import imagePath from "../assets/homePage/projectScreenshot.png";
import imagePath1 from "../assets/homePage/mohamedColegio.jpg";
import flagsPath from "../assets/homePage/flags.png";
import logoPath from "../assets/homePage/vscodeGithubLogo.png";
import typescriptPath from "../assets/homePage/typescriptReact.png";
import MainCard from "../components/MainCard";

function Home() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <MainCard
      imgSrcPath={imagePath1}
      imgSrcPath1={imagePath}
      flagsPath={flagsPath}
      logoPath={logoPath}
      typescriptPath={typescriptPath}
    />
  );
}

export default Home;
