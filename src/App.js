// import Study from '../src/StudyСША/study';
import Home from './Components/Home/Home';
import Aboutme from './Components/AboutMe/Aboutme';
import Setup from './Components/Setup/Setup'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Portfoliopp from './Components/Portfolio/Portfolio';
// import Contact from  './Components/ContactMe/ContactMe';


function App() {
  return (
    <div>
      {/* <Study /> */}
      
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/setup' element={<Setup />} />
        <Route path='/portfolio' element={<Portfoliopp />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
