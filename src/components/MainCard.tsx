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
  flagsPath,
  logoPath,
  typescriptPath,
  workImgPath,
}: MainCardProps) {
  return (
    <div className="card mx-2 mt-3 mb-5 bg-info">
      <h3 className="card-header bg-success text-white text-center">
        Welcome to MoTech
      </h3>

      <div className="card-body border-bottom border-2">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={workImgPath}
              className="img-fluid border border-dark rounded-pill"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">I'm Mohamed</h4>
              <p className="card-text">
                Of Moroccan/Spanish origin and graduated in Computer Science at
                the University of Chester, Mohamed is a developer who came to
                the United Kingdom with the ambition of improving his knowledge
                in software development and with the idea of ​​covering
                different sectors related to programming and web development.
                After completing his studies, he has focused on the creation of
                his own projects with which he plans to innovate and give
                another point of view regarding problem solving.
              </p>
            </div>
          </div>
          {/* <div className="col-md-4">
            <img src={flagsPath} className="img-fluid" />
          </div> */}
        </div>
      </div>

      <div className="card-body border-bottom border-2">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Skills and Services</h4>
              <p className="card-text">
                I specialize mainly in web development and programming in
                different languages. I have experience in development using
                React accompanied by TypeScript and HTML along with Bootstrap as
                a library for CSS. On the other hand, I also have different
                projects in various programming languages ​​such as Java, C++
                and Python, although the latter is the one I am most familiar
                with. <br /> <br />
                The services I offer range from developing web pages for
                different clients, helping designs and ideas to become real in a
                simple and functional way, to programming different software
                depending on the functions and features required for the
                development. <br /> <br />
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
