import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNavbar = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavListItem = styled.li`
  margin-right: 1rem;
`;
class Navbar extends Component {
    render() {
      return (
        <StyledNavbar>
          <h1>My App</h1>
          <NavList>
            <NavListItem><Link to="/">Home</Link></NavListItem>
            <NavListItem><Link to="/about">About</Link></NavListItem>
            <NavListItem><Link to="/contact">Contact</Link></NavListItem>
          </NavList>
        </StyledNavbar>
      );
    }
  }