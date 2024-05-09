import './App.css';
import * as React from 'react';
// import Button from '@mui/material/Button';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Main from './components/Main';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route exact path="/myprojects" element={<Projects/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
// #081c29