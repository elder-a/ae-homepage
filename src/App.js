import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Gallery from "./components/Gallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from "./components/NavBarComp";
import "./css/base.css"
import Experiences from "./components/Experiences";
import DailyUpdates from "./components/DailyUpdates";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <NavBarComp/>
      <div className="bottomborder"></div>
        <BrowserRouter>
          <Routes>
            <Route path="gallery" element={<Gallery />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="dayUpdates" element={<DailyUpdates />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// <Route path="contact" element={<Contact />} />
//<Route path="*" element={<NoPage />} />


//Landing Page
// -- Experiences 
// -- Daily Updates -> Taylor Swift Song of the Day, Weather, Historical Daily Fact
// -- Projects 
// -- Gallery 
// -- Personal 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);