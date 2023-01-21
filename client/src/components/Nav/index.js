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