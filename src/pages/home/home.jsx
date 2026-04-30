import { Link } from "react-router-dom";
import '../../styles/index.css'
import '../../styles/about.css'
import CalcSelection from "./selection";
import About from "./about";

function Home() {
  return (
    <>
      
      <div className="general-box">
        <CalcSelection />
      </div>

      <div className="general-box">
        <About />
      </div>
    </>
  );
}

export default Home;
