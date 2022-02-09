import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
function App() {
  return (
    <>
      <Router>

      <Header/>
      {/* <Switch>
        <Route path='/' exact />
      </Switch> */}
      <Slider/>
      </Router>
     
   
     
    </>
  );
}

export default App;
