import './App.css';
import Banner from './components/Banner';
import MySkills from './components/MySkills';
import Navbar from './components/Navbar';

function App() {
  return (
    // <div className='bg-primary'>
    //   <h1 className='text-center'>Hello</h1>
    // </div>
    <div>
      <Navbar />
      <Banner />
      <MySkills />
    </div>
  );
}

export default App;
