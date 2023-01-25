

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
// import Footer from "./components/Footer/Footer";
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      {/* <Footer/> */}
    </Router>
       );
}

export default App;





