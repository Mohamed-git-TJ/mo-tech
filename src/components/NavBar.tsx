interface NavBarProps {
  companyName: string;
  imgSrcPath: string;
}

function NavBar({ companyName, imgSrcPath }: NavBarProps) {
  return (
    <nav className="navbar navbar-dark bg-dark shadow">
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
    </nav>
  );
}

export default NavBar;
