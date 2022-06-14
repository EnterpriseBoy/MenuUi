import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
