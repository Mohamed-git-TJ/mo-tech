import imagePath from "../assets/eclipse.png";
import imagePath1 from "../assets/mohamedColegio.jpg";
import MainCard from "../components/MainCard";

function Home() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  return <MainCard imgSrcPath={imagePath1} imgSrcPath1={imagePath} />;
}

export default Home;
