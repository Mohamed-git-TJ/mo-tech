import imagePath from "../assets/eclipse.png";
import imagePath1 from "../assets/mohamedColegio.jpg";
import flagsPath from "../assets/flags.png";
import MainCard from "../components/MainCard";

function Home() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <MainCard
      imgSrcPath={imagePath1}
      imgSrcPath1={imagePath}
      flagsPath={flagsPath}
    />
  );
}

export default Home;
