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

      <div className="card-body d-flex border-bottom border-2">
        <div className="flex-shrink-0">
          <img
            src={workImgPath}
            width="280"
            height="140"
            className="img-fluid border border-dark float-left rounded-pill d-inline-block align-center"
            alt=""
          />
        </div>
        <div className="flex-grow-1 ms-3">
          <h4 className="card-title">I'm Mohamed</h4>
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
      <div className="card-body d-flex border-bottom border-2">
        <div className="flex-grow-1 ms-3">
          <h4 className="card-title">Skills and Services</h4>
          <p className="card-text">
            I specialize mainly in web development and programming in different
            languages. I have experience in development using React accompanied
            by TypeScript and HTML along with Bootstrap as a library for CSS. On
            the other hand, I also have different projects in various
            programming languages ​​such as Java, C++ and Python, although the
            latter is the one I am most familiar with. <br /> <br />
            The services I offer range from developing web pages for different
            clients, helping designs and ideas to become real in a simple and
            functional way, to programming different software depending on the
            functions and features required for the development. <br /> <br />
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={imgSrcPath1}
            width="400"
            height="400"
            className="img-fluid float-left rounded d-inline-block align-center"
            alt=""
          />
        </div>
      </div>
      <div className="card-body d-flex text-center">
        <div className="flex-grow-1 ms-3">
          <h5 className="fw-bold">Tools, software and programming languages</h5>
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
        <div className="flex-shrink-0">
          <img
            src={typescriptPath}
            width="200"
            height="40"
            className="img-fluid "
            alt=""
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src={logoPath}
            width="200"
            height="40"
            className="img-fluid "
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
