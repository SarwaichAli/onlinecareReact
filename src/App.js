import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import DownloadSec from './components/DownloadSec';
import GetStart from './components/GetStart';
import TelehealthSec from './components/TelehealthSec';
import AppDownloadSec from './components/AppDownloadSec';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>

      <Header/>
      {/* <Switch>
        <Route path='/' exact />
      </Switch> */}
      <Slider/>
      <DownloadSec/>
      <GetStart/>
      <TelehealthSec/>
      <AppDownloadSec/>
      <Footer/>


      </Router>
     
   
     
    </>
  );
}

export default App;
