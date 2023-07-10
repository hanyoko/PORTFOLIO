import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home'
import Skill from './pages/Skillset'
import Project from './pages/Projects'
import Contact from './pages/Contact'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader"
import ScrollToTop from "./components/ScrollToTop"

import "./reset.css";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./pages/First";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        
        
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<First />}/>
          <Route path="/home" element={<><Navbar /><Home /><Footer /> </>} />
          <Route path="/skillset" element={<><Navbar /><Skill /><Footer /></>} />
          <Route path="/project" element={<><Navbar /><Project /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
