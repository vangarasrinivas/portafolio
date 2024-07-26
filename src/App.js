import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();

  return (
    <div style={{overflow:'hidden', height:'2000px'}}>
      <Navbar />
      <Banner />
      <MySkills />
      <Footer />
    </div>
  );
}

export default App;
