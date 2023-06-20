import Home from './Components/home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import './public/css/home.css';
import FourWedding from './Components/FourWedding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/four-wedding" element={<FourWedding/>}/>
      </Routes>
    </Router>
  );
}

export default App;
