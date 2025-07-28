import { useEffect } from "react";

function Projects() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(() => {
    document.title = "Projects | MoTech";
  });

  return (
    <div className="card mx-2 mt-3 mb-5 bg-info border border-3">
      <h3 className="card-header bg-success text-white text-center border-bottom border-3">
        Developed Projects
      </h3>
      <div className="card-body">

  <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
    <div className="card bg-info border border-dark border-3">

    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/src/assets/projectsPage/weatherApp/madrid.png" className="img-fluid d-block w-100"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/src/assets/projectsPage/weatherApp/london.png" className="img-fluid d-block w-100"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
      <div className="card-body">
        <h5 className="card-title fw-bold">Weather App - <small className="text-body-secondary fw-bold">Python</small></h5>
        <p className="card-text">This Python program utilizes the OpenWeather API to provide real-time weather information and temperature for cities around the world. Users can input the name of any city, and the program retrieves and displays key weather details such as temperature and weather conditions. It's a simple, user-friendly tool for checking global weather using reliable data from OpenWeather.</p>
      </div>
      <div className="card-footer">
      <small className="text-body-secondary fw-bold">GitHub: <a className="link-opacity-100" href="https://github.com/Mohamed-git-TJ/WeatherApp" target="_blank">https://github.com/Mohamed-git-TJ/WeatherApp</a></small>
    </div>
    </div>
  </div>
  
   
  {/* <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div>
  </div>  */}
</div></div>
    </div>
  );
}

export default Projects;
