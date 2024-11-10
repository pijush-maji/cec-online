import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Prescription from './components/Prescription';
import SearchRes from './components/SearchRes';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/home' Component={Home}/>
      <Route path='/printprsc' Component={Prescription} />
      <Route path='/search/:query' Component={SearchRes}/>
    </Routes>
  );
}

export default App;
