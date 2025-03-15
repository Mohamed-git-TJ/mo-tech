import { useEffect } from "react";

function Information() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(()=>{
    document.title ="Information"
  })
  return <h1>Information</h1>;
}

export default Information;
