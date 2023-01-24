import React, { useState} from 'react';
import { Button } from './Buttom';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar () {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          MyStoreaaaaaaaaaa
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;







// //index.js
// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import './style.css'


// class Navbar extends Component {
//     render() {
//       return (
//         <div>
//           <h1 className='store'>My Stores</h1>
//           <Link to = "/">Home</Link>
//           <Link to = "/profile">Profile</Link>
  
//         </div>
//       );
//     }
//   }

//   export default Navbar;