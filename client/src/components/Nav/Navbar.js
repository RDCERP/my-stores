import React, { useState} from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';
import{FcHome} from 'react-icons/fc';  
import{RiProductHuntLine} from 'react-icons/ri'; 
import{RiCustomerService2Line} from 'react-icons/ri'; 
import{GrBusinessService} from 'react-icons/gr'; 
import{GoSignIn} from 'react-icons/go' ; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        My Stores
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <FcHome size={18}/>
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <RiProductHuntLine size={18}/>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <RiCustomerService2Line size={18}/>
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <GrBusinessService size={18}/>
              <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              <GoSignIn size={18}/>
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
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