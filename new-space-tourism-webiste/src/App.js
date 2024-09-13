import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home  from './components/HomeComp/Home.js';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Destination' element={<Destination />}/>
          <Route path='/Crew' element={<Crew />} />
          <Route path='/Technology' element={<Technology/>} />
          <Route path='*' element={<Navigate replace to = "/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
