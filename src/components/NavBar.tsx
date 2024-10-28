import "bootstrap/dist/css/bootstrap.css";
interface NavBarProps {
  companyName: string;
  imgSrcPath: string;
}

function NavBar({ companyName, imgSrcPath }: NavBarProps) {
  return (
    <nav className="navbar navbar expand-md navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imgSrcPath}
            width="30"
            height="30"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{companyName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
