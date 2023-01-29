import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Gallery from "./components/Gallery";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from "./components/NavBarComp";
import "./css/base.css"
import Experiences from "./components/Experiences";
import Updates from "./components/Updates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Wock from "./components/Wock";
import Scrapple from "./components/Scrapple";

export default function App() {
  return (
    <div>
      <NavBarComp className="navSize" />
        <BrowserRouter>
          <Routes>
            <Route path="gallery" element={<Gallery />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="updates" element={<Updates />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wock" element={<Wock />} />
            <Route path="WordScore" element={<Scrapple />} />
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