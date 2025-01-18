
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Module-Navbar/Navbar";
import Home from "./Module-Home/Home";
import About from "./Module-About/About";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> 
     
      </Routes>
    </Router>
  );
}

export default App;
