import githubIcon from "../icons/footer/githubsvg.svg";
import linkedinIcon from "../icons/footer/linkedinsvg.svg";
import footerLogoIcon from "../icons/footer/footerlogo.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import "../scssFiles/main.scss";

type CustomLinkProps = {
  className: string;
  to: string;
  children: React.ReactNode;
};

function Footer() {
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const isHomeActive = useMatch({ path: "/", end: true });
  return (
    <div className="main-footer mt-auto bg-primary shadow ">
      <div className="card-body text-light ">
        <h3 className="card-title border-bottom border-4 mb-2 text-center pb-1">
          Developed by
        </h3>
        <div className="row">
          <div className="col-md-3 col-sm-6 ms-4">
            <h5 className="fw-bolder">Mohamed Triki Jouhrati</h5>
            <ul className="list-unstyled">
              <li>
                <p className="text-secondary">
                  This website has been created with the purpose of offering my
                  services of software development as well as my own personal
                  portfolio
                </p>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 me-4 ms-4">
            <h5 className="fw-bolder">Contact Details</h5>
            <ul className="list-unstyled">
              <li className="text-secondary">contact@mo-technology.com</li>
              <li className="text-secondary">07443405531</li>
              <CustomLink className="" to="/about">
                SEND ME A MESSAGE
              </CustomLink>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 ms-4">
            <h5 className="fw-bolder">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  onMouseEnter={() => setHidden(false)}
                  onMouseLeave={() => setHidden(true)}
                  href="https://github.com/Mohamed-git-TJ"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    width="30"
                    height="30"
                    className={hidden ? "me-2" : "opacity-50 me-2 w-1 h-1"}
                    alt=""
                  />
                </a>

                <a
                  onMouseEnter={() => setHidden1(false)}
                  onMouseLeave={() => setHidden1(true)}
                  href="https://www.linkedin.com/in/mohamed-triki-jouhrati-53a4b6321/"
                  target="_blank"
                >
                  <img
                    src={linkedinIcon}
                    width="30"
                    height="30"
                    className={hidden1 ? "" : "opacity-50"}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-1 col-sm-6 ms-4">
            <Link
              onMouseEnter={() => setHidden2(isHomeActive ? true : false)}
              onMouseLeave={() => setHidden2(true)}
              className="footer-logo"
              to="/"
            >
              <img
                src={footerLogoIcon}
                width="120"
                height="120"
                className={hidden2 ? "" : "opacity-50"}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="footer-bottom mt-1">
          <p className="small text-center text-secondary">
            @ motech.com (2025) | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function CustomLink({ className, to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li>
        <Link
          className="w-50 nav-link card-header bg-success text-center rounded-0 border border-2 mt-2"
          hidden={isActive ? true : false}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </li>
    );
  }
}

export default Footer;
