import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scssFiles/main.scss";

interface MainCardProps {
  imgSrcPath: string;
  imgSrcPath1: string;
  flagsPath: string;
}

function MainCard({ imgSrcPath, imgSrcPath1, flagsPath }: MainCardProps) {
  return (
    <div className="card mx-2 my-2 bg-info">
      <h4 className="card-header bg-success text-white text-center">
        Welcome to MoTech
      </h4>

      <div className="card-body d-flex ">
        <div className="flex-shrink-0">
          <img
            src={imgSrcPath}
            width="120"
            height="80"
            className="img-fluid float-left rounded d-inline-block align-center"
            alt=""
          />
        </div>
        <div className="flex-grow-1 ms-3">
          <h5 className="card-title">I'm Mohamed!</h5>
          <p className="card-text">
            Of Moroccan/Spanish origin and graduated in Computer Science at the
            University of Chester, Mohamed is a developer who came to the United
            Kingdom with the ambition of improving his knowledge in software
            development and with the idea of ​​covering different sectors
            related to programming and web development. After completing his
            studies, he has focused on the creation of his own projects with
            which he plans to innovate and give another point of view regarding
            problem solving.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={flagsPath}
            width="220"
            height="220"
            className="img-fluid  mt-4"
            alt=""
          />
        </div>
      </div>
      <div className="card-body d-flex">
        <div className="flex-shrink-0">
          <img
            src={imgSrcPath1}
            width="120"
            height="80"
            className="img-fluid float-left rounded d-inline-block align-center"
            alt=""
          />
        </div>
        <div className="flex-grow-1 ms-3">
          <h5 className="card-title">My story</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
