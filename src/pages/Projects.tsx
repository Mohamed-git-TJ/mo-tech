import { useEffect } from "react";

function Projects() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
useEffect(()=>{
  document.title ="Projects | MoTech"
})

  return (
    <div className="card mx-2 mt-3 mb-5 bg-info">
      <h3 className="card-header bg-success text-white text-center">
        Developed Projects
      </h3>
      <div className="card-body"></div>
    </div>
  );
}

export default Projects;
