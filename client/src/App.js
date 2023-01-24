import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
       );
}

export default App;









//First code
// import './App.css';
// import Landing from './scenes/Landing';
// import Footer from './components/Footer';
// import Navbar from './components/Nav';
// import Profile from './components/Profile';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <h1>taco</h1>
//       <Router>
//       <Navbar/>
//         <Routes>
//           <Route exact path = "/" element = {<Footer/>} />
//       <Route exact path ="/profile" element = {<Profile/>} />
          
//         </Routes>
//       </Router>

//       {/* <Landing />
//       <Footer/> */}
//     </div>
//   );
// }

// export default App;
