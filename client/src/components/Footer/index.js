import React, { Component } from 'react';
// import styled from 'styled-components';

// const StyledFooter = styled.footer`
//   background-color: #333;
//   color: #fff;
//   padding: 1rem;
//   text-align: center;
// `;

class Footer extends Component {
  render() {
    return (
      <div>
      {/* <StyledFooter> */}
        <p>Copyright © {new Date().getFullYear()}Group 3 Project</p>
      {/* </StyledFooter> */}
      </div>
    );
  }
}

export default Footer;
