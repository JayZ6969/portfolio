import './App.css';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Engineer from './components/Engineer/Engineer.js';
import Photographer from './components/Photographer/Photographer.js';
import Musician from './components/Musician/Musician.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route> 
        <Route path="/engineer" element={<Engineer />}></Route>
        <Route path="/photographer" element={Photographer}></Route>
        <Route path="/musician" element={Musician}></Route>
      </Routes>
    </div>
  );
}

export default App;
