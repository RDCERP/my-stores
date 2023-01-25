import React from 'react';
import '../Footer/Footer.css';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

 const Footer = () =>  {
  return (
    <MDBFooter className='test text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
    <MDBContainer className=' MDB-container' >
      <section className='mb-4 footer-container'>
        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fab fa-facebook-f' />
        </MDBBtn>

        {/* <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-twitter' />
        </MDBBtn> */}

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-google' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-instagram' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-linkedin' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='link'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center text-dark p-3 copy-right-footer'>
    &copy; {new Date().getFullYear()} Copyright:
      <a className='text-dark' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </MDBFooter>
  );
}

export default Footer;