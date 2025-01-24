import Form from "../components/Form";

function AboutMe() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="card mx-2 mt-3 mb-5 bg-info">
      <h3 className="card-header bg-success text-white text-center">
        About Mo'Tech
      </h3>
      <div className="row">
        <div className="col-sm-6">
          <div className="card-body">
            <h3 className="card-header bg-success text-white text-center rounded-0 border border-4">
              General Information
            </h3>
            <h4 className="card-title text-center mt-2 fw-bolder">Education</h4>
            <p className="card-text text-center">
              <h5 className="card-title text-center mt-4">
                Computer Science Bsc
              </h5>
              University of Chester (2020-2024)
              <br /> <br />
              <h4 className="card-title text-center mt-2 fw-bolder">
                Languages
              </h4>
              <h5 className="card-title text-center mt-4">Spanish</h5>
              <h5 className="card-title text-center mt-4">Arabic (Morocco)</h5>
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-body">
            <h3 className="card-header bg-success text-white text-center rounded-0 border border-4">
              Contact Me
            </h3>
            <div>
              <Form></Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
