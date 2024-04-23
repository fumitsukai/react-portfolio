import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import ProjectGallery from "./components/ProjectGallery";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import PortofolioNavbar from "./components/Navbar";
import "./index.css";

function App() {
  const location = useLocation();
  return (
    <>
      <PortofolioNavbar></PortofolioNavbar>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<ProjectGallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
