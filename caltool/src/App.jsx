import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import CalFinal from "./pages/calfinal/calfinal";
import CalParcial from "./pages/calparcial/calparcial";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora-parcial" element={<CalParcial />} />
        <Route path="/calculadora-final" element={<CalFinal />} />
      </Routes>
    </Router>
  );
}

export default App;
