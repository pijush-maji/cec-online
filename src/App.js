import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Prescription from './components/Prescription';
import SearchRes from './components/SearchRes';
import PatientSummary from './components/PatientSummary';
import ModifyPatient from './components/ModifyPatient';
import NewVisit from './components/NewVisit';
import DataIntakeDone from './components/DataIntakeDone';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/home' Component={Home}/>
      <Route path='/saved' Component={DataIntakeDone} />
      <Route path='/printprsc' Component={Prescription} />
      <Route path='/search/:query' Component={SearchRes}/>
      <Route path='/patients/:patientId' Component={PatientSummary}/>
      <Route path='/patients/:patientId/:visitId' Component={ModifyPatient}/>
      <Route path='/patients/:patientId/newVisit' Component={NewVisit}/>

    </Routes>
  );
}

export default App;
