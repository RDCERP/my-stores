

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>

      <Footer/>
 
      
      </div>
 
    </Router>
       );
}

export default App;





