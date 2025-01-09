import imagePath from "../assets/projectScreenshot.png";
import imagePath1 from "../assets/mohamedColegio.jpg";
import flagsPath from "../assets/flags.png";
import logoPath from "../assets/vscodeGithubLogo.png";
import typescriptPath from "../assets/typescriptReact.png";
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
