import React, { useState} from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';

function Navbar () {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
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
          <li className='nav-item'>
            <Link to='/servises' className='nav-links' onClick={closeMobileMenu}>
              servises <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/>}
          </li>
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
        </ul>
        <Button/>
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