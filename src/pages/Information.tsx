import { useEffect } from "react";

function Information() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(()=>{
    document.title ="Information | MoTech"
  })
  return <h1>Information</h1>;
}

export default Information;
