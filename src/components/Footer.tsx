import imagePath from "../assets/eclipse.png";
function Footer() {
  return (
    <div className="main-footer mt-auto bg-dark shadow ">
      <div className="card-body text-light ">
        <h3 className="card-title border-bottom border-3 rounded mb-2 text-center mb-2">
          Developed by
        </h3>
        <div className="row">
          <div className="col-md-1  mx-auto">
            <img
              src={imagePath}
              width="120"
              height="120"
              className="d-inline-block align-center"
              alt=""
            />
          </div>

          <div className="col-md-3 col-sm-6 mx-auto">
            <ul className="list-unstyled">
              <li>Mohamed Triki Jouhrati</li>
              <li>mohamed02tj@gmail.com</li>
              <li>07443405531</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mx-auto">
            <h5>My details</h5>
            <ul className="list-unstyled">
              <li>Mohamed Triki Jouhrati</li>
              <li>mohamed02tj@gmail.com</li>
              <li>07443405531</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-1">
          <p className="small text-center">
            @ motech.com (2024) | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
