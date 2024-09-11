import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Prescription from './components/Prescription';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/printprsc' Component={Prescription} />
    </Routes>
  );
}

export default App;
