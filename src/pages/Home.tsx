import imagePath from "../assets/homePage/projectScreenshot.png";
import flagsPath from "../assets/homePage/flags.png";
import logoPath from "../assets/homePage/vscodeGithubLogo.png";
import typescriptPath from "../assets/homePage/typescriptReact.png";
import workImgPath from "../assets/homePage/workImg.jpg";
import MainCard from "../components/MainCard";
import { useEffect } from "react";

function Home() {
  useEffect(()=>{
    document.title ="MoTech"
  })
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <MainCard
      imgSrcPath1={imagePath}
      flagsPath={flagsPath}
      logoPath={logoPath}
      typescriptPath={typescriptPath}
      workImgPath={workImgPath}
    />
  );
}

export default Home;
