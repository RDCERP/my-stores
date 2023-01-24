import React, { Component } from 'react';
// import styled from 'styled-components';
import { Link } from "react-router-dom";
import './style.css'

// const styles = {
//   dog: {
//     backgroundColor: "green",
//     color: "red",
//     // fontFamily: "cursive"
//   }
// }

// const StyledNavbar = styled.nav`
//   background-color: #333;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   padding: 1rem;
// `;

// const NavList = styled.ul`
//   list-style: none;
//   display: flex;
// `;

// const NavListItem = styled.li`
//   margin-right: 1rem;
// `;
class Navbar extends Component {
    render() {
      return (
        <div>
        {/* <StyledNavbar> */}
          <h1 className='store'>My Stores</h1>
          <Link to = "/">Home</Link>
          <Link to = "/profile">Profile</Link>
          {/* <NavList>
            <NavListItem><Link to="/">Home</Link></NavListItem>
            <NavListItem><Link to="/about">About</Link></NavListItem>
            <NavListItem><Link to="/contact">Contact</Link></NavListItem>
          </NavList> */}
        {/* </StyledNavbar> */}
        </div>
      );
    }
  }

  export default Navbar;