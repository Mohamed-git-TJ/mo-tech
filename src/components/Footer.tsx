import githubIcon from "../icons/githubsvg.svg";
import linkedinIcon from "../icons/linkedinsvg.svg";
import logoIcon from "../icons/logo.svg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="main-footer mt-auto bg-dark shadow rounded-top">
      <div className="card-body text-light ">
        <h3 className="card-title border-bottom border-2 rounded mb-2 text-center pb-1">
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
              <li className="text-secondary">mohamed02tj@gmail.com</li>
              <li className="text-secondary">07443405531</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 ms-4">
            <h5 className="fw-bolder">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/Mohamed-git-TJ">
                  <img
                    src={githubIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-center me-2 "
                    alt=""
                  />
                </a>
                <a href="https://www.linkedin.com/in/mohamed-triki-jouhrati-53a4b6321/">
                  <img
                    src={linkedinIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-center"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-1 mx-auto">
            <Link className="footer-logo" to="/">
              <img
                src={logoIcon}
                width="120"
                height="120"
                className="d-inline-block align-center"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="footer-bottom mt-1">
          <p className="small text-center text-secondary">
            @ motech.com (2024) | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
