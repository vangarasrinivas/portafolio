import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';
import Work from './components/Work';
function App() {
  AOS.init();

  return (
    <div>
      <Navbar />
      <div style={{overflow :'hidden'}}>
        <Banner />
        <MySkills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
