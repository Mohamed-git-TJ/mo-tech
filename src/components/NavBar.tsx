import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import imagePath from "../assets/eclipse.png";
import logoIcon from "../icons/logowhite.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "../scssFiles/main.scss";
// import { useState } from "react";

// interface NavBarProps {
//   companyName: string;
//   imgSrcPath: string;
//   navItems: string[];
// }

type CustomLinkProps = {
  className: string;
  to: string;
  children: React.ReactNode;
};

function NavBar() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hidden, setHidden] = useState(true);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary  shadow ">
      <div className="container-fluid ">
        <Link
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
          className="navbar-brand"
          to="/"
        >
          <img
            src={logoIcon}
            width="60"
            height="60"
            className={hidden ? "m-1" : "m-1 opacity-25"}
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse 
          navbar-collapse 
          align-items-start 
          flex-column 
          flex-md-row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            <CustomLink className="" to="/">
              Home
            </CustomLink>

            <CustomLink className="" to="/projects">
              Projects
            </CustomLink>

            {/* <CustomLink className="" to="/information">
              Information
            </CustomLink> */}

            <CustomLink className="" to="/aboutme">
              About Me
            </CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ className, to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link
        className={isActive ? "nav-link fw-bold active" : "nav-link"}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
