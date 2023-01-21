import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <p>Copyright © {new Date().getFullYear()} My Company</p>
      </StyledFooter>
    );
  }
}

export default Footer;
