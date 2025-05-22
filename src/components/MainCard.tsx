import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scssFiles/main.scss";

interface MainCardProps {
  imgSrcPath1: string;
  flagsPath: string;
  logoPath: string;
  typescriptPath: string;
  workImgPath: string;
}

function MainCard({
  imgSrcPath1,
  logoPath,
  typescriptPath,
  workImgPath,
}: MainCardProps) {
  return (
    <div className="card mx-2 mt-3 mb-5 bg-info border border-3">
      <h3 className="card-header bg-success text-white text-center border-bottom border-3">
        Welcome to MoTech
      </h3>

      <div className="card-body border-bottom border-3">
        <div className="row g-0 ">
          <div className="col-md-4">
            <img
              src={workImgPath}
              className="img-fluid border border-3 border-dark rounded"
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h4 className="card-title">I'm Mohamed</h4>
              <p className="card-text">
                Of Moroccan-Spanish origin and a Computer Science graduate from
                the University of Chester, Mohamed is a passionate developer who
                moved to the United Kingdom with the ambition to deepen his
                expertise in software development and explore various areas of
                programming and web development. Since completing his studies,
                he has focused on building his own projects, aiming to bring
                innovative solutions and fresh perspectives to problem-solving.
              </p>
            </div>
          </div>
          {/* <div className="col-md-4">
            <img src={flagsPath} className="img-fluid" />
          </div> */}
        </div>
      </div>

      <div className="card-body border-bottom border-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Skills and Services</h4>
              <p className="card-text">
                I specialize primarily in web development and programming across
                multiple languages. My experience includes building applications
                with React, TypeScript, and HTML, using Bootstrap as a CSS
                framework. In addition, I've worked on various projects in Java,
                C++, and Python — with Python being the language I’m most
                proficient in. <br /> <br />
                I offer a range of services, from developing websites tailored
                to clients’ needs — turning designs and ideas into simple,
                functional solutions — to programming custom software based on
                specific features and functionality requirements.
                <br /> <br />
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={imgSrcPath1} className="img-fluid rounded" />
          </div>
        </div>
      </div>

      <div className="card-body">
        <div className="row g-0">
          <div className="col-md-6 text-center">
            <div className="card-body">
              <h5 className="fw-bold">
                Tools, software and programming languages
              </h5>
              <p className="card-text fw-bolder">
                <br />
                VSCode <br />
                GitHub
                <br />
                <br /> Typescript (React Dev)
                <br /> Java
                <br /> C++
                <br /> Python
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={typescriptPath} className="img-fluid rounded" />
          </div>
          <div className="col-md-3">
            <img src={logoPath} className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
